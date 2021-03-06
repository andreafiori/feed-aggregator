import React, { Component } from 'react';
import { FeedManager } from '../feeds/FeedsManager';
import { SoftwareDevelopmentNewsGroups, SoftwareDevelopmentNewsFeeds } from '../feeds/SoftwareDevelopmentFeedManager';
import FeedsCategoryList from '../components/FeedsCategoryList';
import Breadcrumbs from '../components/Breadcrumbs';
import NewsGroupList from '../components/NewsGroupList';
import NewsGroupError from '../components/NewsGroupError';

class SoftwareDevelopmentGroup extends Component {

  setupBreadcrumbs(newsGroup) {
    let breadcrumbs = [
      { label: 'Software Development', href: '/software-development', title: 'Back to Software Development feeds main page', active: false },
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
        label: 'No newsgroup',
        href: null,
        title: null,
        active: true
      });
    }

    return breadcrumbs;
  }

  render() {
    const group = FeedManager.getNewsGroupByKey(SoftwareDevelopmentNewsGroups, this.props.match.params.group);
    const feeds = FeedManager.getNewsFeedsByGroup(SoftwareDevelopmentNewsFeeds, this.props.match.params.group);
    const breadcrumbs = this.setupBreadcrumbs(group);

    if (group) {
      return (
        <div>
  
          <Breadcrumbs elements={breadcrumbs} />
  
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-9">
              <NewsGroupList group={group} />
            </div>
  
            <div className="col-sm-12 col-md-12 col-lg-3">
              <FeedsCategoryList items={feeds} />
            </div>
          </div>
  
        </div>
      );
    }

    return (
      <NewsGroupError breadcrumbs={breadcrumbs} />
    );
    
  }
}

export default SoftwareDevelopmentGroup;
