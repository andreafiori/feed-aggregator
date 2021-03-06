import React, { Component } from 'react';
import { FeedManager } from '../feeds/FeedsManager';
import NewsList from '../components/NewsList';
import Breadcrumbs from '../components/Breadcrumbs';
import { CyberSecurityNewsGroups } from '../feeds/CyberSecurityFeedManager';

class CyberSecurity extends Component {

  // TODO export feeds in a list, optimize rendering and make it more dynamic
  attackMaps = [
    { label: 'Fortinet Threat Map', href: 'https://threatmap.fortiguard.com/', title: 'Fortinet Real time threat map'},
    { label: 'Digital Attack Map', href: 'http://www.digitalattackmap.com/', title: 'Digital Attack Map'},
    { label: 'Threat Cloud Attack Map', href: 'https://threatmap.checkpoint.com/', title: 'Threat Cloud Attack Map'},
  ];

  training = [
    { label: 'CompTIA', href: 'https://www.comptia.org/', title: 'Go to the CompTIA website'},
    { label: 'Cybrary', href: 'https://www.cybrary.it/', title: ''},
    { label: 'E-learn Security', href: 'http://www.elearnsecurity.com/', title: ''},
  ];

  certifications = [
    { label: 'CEH', href: 'https://www.eccouncil.org/', title: ''},
    { label: 'Sans', href: 'https://www.sans.org/', title: ''},
    { label: 'GIAC', href: 'https://www.giac.org/', title: ''},
    { label: 'CREST', href: 'http://www.crest-approved.org/', title: ''},
    { label: 'Tiger Scheme', href: 'https://www.tigerscheme.org/', title: ''},
    { label: 'Mile 2', href: 'https://mile2.com/', title: ''},
    { label: 'ISC 2', href: 'http://www.isc2.org/', title: ''},
    { label: 'Isaca', href: 'http://www.isaca.org/', title: ''},
  ]

  render() {
    const { attackMaps, training, certifications } = this;

    const newsGroups = FeedManager.getAllNewsGroupsAsArray(CyberSecurityNewsGroups);
    const breadcrumbs = [
      { label: 'Cyber Security', href: null, title: null, active: true }
    ];

    return (
      <div>

        <Breadcrumbs elements={breadcrumbs} />

        <div className="row">

          <div className="col-sm-12 col-md-12 col-lg-9">
            <NewsList newsGroups={newsGroups} />
          </div>

          <div className="col-sm-12 col-md-12 col-lg-3">
            <h3 className="font-italic">Attack Maps</h3>
            <ul className="list-unstyled">
              { attackMaps.map((item, i) =>
                <li key={'attack-map' + i}><a href={item.href} rel="noopener noreferrer" target="_blank" title={item.title}>{item.label}</a></li>
              )}
            </ul>

            <h3 className="font-italic">Training</h3>
            <ul className="list-unstyled">
              { training.map((item, i) =>
                <li key={'attack-map' + i}><a href={item.href} rel="noopener noreferrer" target="_blank" title={item.title}>{item.label}</a></li>
              )}
            </ul>

            <h3 className="font-italic">Certifications</h3>
            <ul className="list-unstyled">
              { certifications.map((item, i) =>
                <li key={'attack-map' + i}><a href={item.href} rel="noopener noreferrer" target="_blank" title={item.title}>{item.label}</a></li>
              )}
            </ul>

          </div>

        </div>

      </div>
    );
  }
}

export default CyberSecurity;
