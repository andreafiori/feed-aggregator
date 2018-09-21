import React, { Component } from 'react';
import { RssParser } from '../api/RssParser.js';
import { getNewsFeedBySlug, getNewsGroupByKey, getNewsFeedsByGroup } from '../feeds/FeedsManager.js';
import FeedsCategoryList from '../components/FeedsCategoryList.js';
import FeedsFromApi from '../components/FeedsFromApi.js';
import LoadingSpinner from '../components/LoadingSpinner.js';
import Breadcrumbs from './../components/Breadcrumbs.js';
import { JobsNewsGroups, JobsNewsFeeds } from '../feeds/JobsFeedManager.js';

class JobsGroupDetails extends Component {
  constructor(props) {
    super(props);

    let currentNewsGroup = getNewsGroupByKey(JobsNewsGroups, props.match.params.group);

    let newsFeedsByGroup = getNewsFeedsByGroup(JobsNewsFeeds, props.match.params.group);

    let currentFeed = getNewsFeedBySlug(newsFeedsByGroup, props.match.params.slug);

    this.state = {
      group: props.match.params.group,
      slug: props.match.params.slug,
      currentNewsGroup: currentNewsGroup,
      currentFeed: currentFeed,
      currentFeedsList: getNewsFeedsByGroup(JobsNewsFeeds, props.match.params.group),
      breadcrumbs: [
        
        { label: currentNewsGroup.title, href: currentNewsGroup.path ? currentNewsGroup.path : '', title: currentNewsGroup.title, active: false },
        { label: currentFeed.label, href: null, title: 'List', active: true },
      ],
      newsFromApi: null,
      rssParser: new RssParser(),
      error: null,
    };

  }

  setupBreadCrumbs(newsGroup) {
    let breadcrumbs = [
      { label: 'Jobs', href: '/jobs', title: 'Back to the jobs main page', active: false },
    ];

    if (typeof newsGroup !== 'undefined') {
      breadcrumbs.push({
        label: newsGroup.title,
        href: null,
        title: null,
        active: true
      });
    } else {
      breadcrumbs.push({
        label: 'No news group',
        href: null,
        title: null,
        active: true
      });
    }

    return breadcrumbs;
  }

  /**
   * Load first data on loading page
   */
  componentWillMount() {
    this.setupCurrentNewsGroup();
  }

  /**
   * Check state and update it if needed
   * 
   * @param {*} prevProps 
   * @param {*} prevState 
   */
  componentDidUpdate(prevProps, prevState) {
    // This is the initial render without a previous prop change
    if (prevProps === undefined) {
      return false;
    }

    // Set new state
    this.setupCurrentNewsGroup();
  }

  setupCurrentNewsGroup() {
    const {slug, group} = this.props.match.params;
    const {rssParser} = this.state;

    if ( (slug !== this.state.slug || this.state.newsFromApi === null) && this.state.error === null) {

      let currentFeedsList = getNewsFeedBySlug(this.state.currentFeedsList, slug);

      let self = this;
      rssParser.callPromise(currentFeedsList.url)
        .then(function (response) {
          self.setState({
            group: group,
            slug: slug,
            newsFromApi: rssParser.parseRssXmlString(response.data, currentFeedsList.isAtom),
            error: null,
          });
        })
        .catch(function (error) {
          self.setState({
            group: group,
            slug: slug,
            newsFromApi: null,
            error: error
          });
        });

    }

    // Scroll to top
    window.scrollTo(0, 0);
  }

  render() {

    const { currentFeed, currentNewsGroup, currentFeedsList, newsFromApi, breadcrumbs, error } = this.state;

    return (
      <div>

        <Breadcrumbs elements={breadcrumbs} />

        <div className="row">
          <div className="col-sm-12 col-md-8 col-lg-9">
 
            {error !== null &&
              <div className="alert alert-danger">
                <h3>Error occurred</h3>
                <p>{ error.message }</p>
              </div>
            }

            {newsFromApi === null && error === null &&
              <LoadingSpinner />
            }

            {newsFromApi !== null &&
              <FeedsFromApi currentFeed={currentFeed} newsGroup={currentNewsGroup} newsFromApi={newsFromApi} />
            }
          </div>

          <div className="col-sm-12 col-md-4 col-lg-3">
            <FeedsCategoryList items={currentFeedsList} />
          </div>
        </div>

      </div>

    );
  }

}

export default JobsGroupDetails;
