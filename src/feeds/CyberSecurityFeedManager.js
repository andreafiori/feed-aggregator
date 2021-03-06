import { SansNewsGroup, SansNewsFeeds } from './SansFeeds';
import { CyberSecurityWebsitesNewsGroup, CyberSecurityWebsitesFeeds } from './CyberSecurityWebsitesFeed';
import { DarkreadingNewsGroup, DarkreadingNewsFeeds } from './DarkReadingFeeds';
import { WeLiveSecurityNewsGroup, WeLiveSecurityNewsFeeds } from './WeLiveSecurityFeeds';
import { ThreatPostNewsGroup, ThreatPostNewsFeeds } from './ThreatPostFeeds';
import { GovernmentNewsGroup, GovernmentNewsFeeds } from './GovernmentFeeds';
import { IsacaNewsGroup, IsacaNewsFeeds } from './IsacaFeeds';
import { AntivirusNewsGroup, AntivirusNewsFeeds } from './AntivirusFeeds';

export const CyberSecurityNewsGroups = {
	'websites': 					CyberSecurityWebsitesNewsGroup,
	'antivirus': 					AntivirusNewsGroup,
	'we-live-security':		WeLiveSecurityNewsGroup,
	'government': 				GovernmentNewsGroup,
	'darkreading': 				DarkreadingNewsGroup,
	'threat-post': 				ThreatPostNewsGroup,
	'sans': 							SansNewsGroup,
	'isaca': 							IsacaNewsGroup,
	// fortinet: 					FortinetNewsGroup,
};

export const CyberSecurityNewsFeeds = {
	'websites': 					CyberSecurityWebsitesFeeds,
	'antivirus': 					AntivirusNewsFeeds,
	'we-live-security': 	WeLiveSecurityNewsFeeds,
	'government': 				GovernmentNewsFeeds,
	'darkreading': 				DarkreadingNewsFeeds,
	'threat-post': 				ThreatPostNewsFeeds,
	'sans': 							SansNewsFeeds,
	'isaca': 							IsacaNewsFeeds,
	// 'fortinet': 					FortinetNewsFeeds,
};
