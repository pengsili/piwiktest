/**
* For Single Page EXTJS application should call following api before every ajax request
* oocl_piwik_tracker.setupContext('search/userids');
*/
Ext.Ajax.on("beforerequest", function (conn, options) {
	var bfname = oocl_piwik_common._ignoreServicePrefix(options.url);
	oocl_piwik_tracker.setupContext(bfname);
	var piwik_uuid = oocl_piwik_tracker._createContext();
	oocl_piwik_common._setHeader(piwik_uuid, bfname);
	// oocl_piwik_tracker._clearContext();
	oocl_piwik_tracker._startTiming(piwik_uuid);
});
Ext.Ajax.on("requestcomplete", function (conn, response, options) {
	oocl_piwik_tracker._endTiming(options.headers.piwik_uuid, options.headers.cat_url);
});
Ext.Ajax.on("requestexception", function (conn, response, options) {
	oocl_piwik_tracker._endTiming(options.headers.piwik_uuid, options.headers.cat_url);
});
