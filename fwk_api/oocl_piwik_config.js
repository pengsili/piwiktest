oocl_piwik_config = {
  piwik_sites: [
    // {
    //   piwik_url: 'http://dongja3-w7/piwik',
    //   url: 'http://zhangte4-w7:3000',
    //   siteId: 3,
    //   cookieid_callback: getUserId,//getUserId需要自己实现，用于获取userid

    // },
    {
      // piwik_url: 'http://localhost/piwik',
      piwik_url: 'https://pengaa.innocraft.cloud',
      // piwik_url: 'https://olp.innocraft.cloud',
      url: 'http://pengaa-w7/piwiktest',
      siteId: 1,
      // disable:true,
      cookieid_callback: function () {
        return 'testuser';
      }

    }
  ],
  ignoreServicePrefix: [
    '/fwk_api/test'//url中需要忽略的部分,如：/piwik/fwk_api/
  ],
  canIgnorRequest: function (request) {
    return !!request.cache;
  }
}