var _paq = _paq || [];
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */

var _piwik_cvalue = '';
var _piwik_disable = true;

window.addEventListener('load', function (e) {
  _paq.push(['setUserId', _piwik_cvalue]);
  _paq.push(['setDocumentTitle', document.title]);
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
});



(function () {

  var i;
  var my_url;
  var callback;
  var cname;
  for (i = 0; i < oocl_piwik_config.piwik_sites.length; i++) {
    my_url = oocl_piwik_config.piwik_sites[i].url;
    callback = oocl_piwik_config.piwik_sites[i].cookieid_callback;
    if (window.location.href.indexOf(my_url) != -1) {
      if (oocl_piwik_config.piwik_sites[i].disable) {
        return;
      }
      _piwik_disable = false;
      var u = oocl_piwik_config.piwik_sites[i].piwik_url + '/';
      _paq.push(['setTrackerUrl', u + 'piwik.php']);
      _paq.push(['setSiteId', oocl_piwik_config.piwik_sites[i].siteId]);
      if (callback && typeof (callback) === "function") {
        _piwik_cvalue = callback();
      } else {
        cname = oocl_piwik_config.piwik_sites[i].cookieid + '=';
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
          var c = ca[i];

          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(cname) == 0) {
            _piwik_cvalue = c.substring(cname.length, c.length);
            break;
          }
        }
      }

      var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
      g.type = 'text/javascript'; g.async = true; g.defer = true; g.src = u + 'piwik.js'; s.parentNode.insertBefore(g, s);
      break;
    }
  }

  var removedKeys = new Array();
  for (var i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i).indexOf("oocl_piwik") == 0) {
      removedKeys.push(localStorage.key(i));
    }
  }
  for (var i = 0; i < removedKeys.length; i++) {
    localStorage.removeItem(removedKeys[i]);
  }
})();

var oocl_piwik_bfName = null;
var oocl_piwik_customUrl = null;
window.addEventListener('hashchange', function () {
  _paq.push(['deleteCustomVariables', 'page']);
  _paq.push(['setUserId', _piwik_cvalue]);
  _paq.push(['setReferrerUrl', window.location.href]);
  // make Piwik aware of newly added content
  var content = document.getElementById('content');
  _paq.push(['MediaAnalytics::scanForMedia', content]);
  _paq.push(['FormAnalytics::scanForForms', content]);
  _paq.push(['trackContentImpressionsWithinNode', content]);
  _paq.push(['enableLinkTracking']);
});

if (typeof oocl_piwik === 'undefined') { oocl_piwik = {}; }

oocl_piwik.UUID = function () {

  this.generateUUID = function () {
    return this._createUUID();
  };

  this._createUUID = function () {
    var utcStart = new Date(1582, 10, 15, 0, 0, 0, 0).getTime();
    var current = new Date().getTime();
    var time = (utcStart < 0) ? Math.abs(utcStart) + current : current - utcStart;
    var timeStr = time.toString(16).toLocaleUpperCase();

    var part1 = timeStr.substr(0, 8);
    var part2 = timeStr.substr(8, timeStr.length);
    while (part2.length < 4) {
      part2 = part2 + '0';
    }
    var part3 = this._random4Bits();
    var part4 = this._random4Bits() + this._random4Bits();

    return 'oocl_piwik' + '-' + part1 + '-' + part2 + '-' + part3 + '-' + part4;
  };

  this._random4Bits = function () {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1).toUpperCase();
  };
};
oocl_piwik.uuid = new oocl_piwik.UUID();
oocl_piwik.Common = function () { };
oocl_piwik.Common = function () {
  this._isExt = function () {
    if (typeof Ext == 'undefined') {
      return false;
    }

    return true;
  };
  this._setHeader = function (piwik_uuid, bfName) {
    if (oocl_piwik_common._isExt() && !_piwik_disable) {
      Ext.Ajax.defaultHeaders = {
        'cat_url': bfName,
        'piwik_uuid': piwik_uuid
      };
    }
    // if(oocl_piwik_common._isAngular()){
    //   angular.module('cmcd').run(function($http) {
    // 	$http.defaults.headers.common['cat_uri'] = bfName;
    //   });
    // }

  };

  this._isAngular = function () {
    if (typeof angular == 'undefined') {
      return false;
    }
    return true;
  };

  this._getDocTitle = function () {
    if (oocl_piwik_common._isAngular()) {
      var url = window.location.hash.substr(1).replace('!/', '');
      return oocl_piwik_common._ignoreServicePrefix(url);
    }
    return document.title;
  };

  this._getCustomUrl = function () {
    if (oocl_piwik_common._isAngular()) {
      var url = window.location.hash.substr(1).replace('!/', '');
      return oocl_piwik_common._ignoreServicePrefix(url);
    }
    var url = window.location.href;
    return oocl_piwik_common._ignoreServicePrefix(url);
  };

  this._ignoreServicePrefix = function (url) {
    if (_piwik_disable)
      return;
    var customUrl = url;
    if (oocl_piwik_config.ignoreServicePrefix && oocl_piwik_config.ignoreServicePrefix.length != 0) {
      var i;
      var ignoreUrl;
      for (i = 0; i < oocl_piwik_config.ignoreServicePrefix.length; i++) {
        ignoreUrl = oocl_piwik_config.ignoreServicePrefix[i];
        if (customUrl.indexOf(ignoreUrl) != -1) {
          customUrl = customUrl.substring(customUrl.indexOf(ignoreUrl) + ignoreUrl.length, customUrl.length);
          if (customUrl.indexOf('?') != -1) {
            customUrl = customUrl.substring(0, customUrl.indexOf('?'));
          }
          return customUrl;
        }
      }
    }
    if (customUrl.indexOf('//') != -1) {
      customUrl = customUrl.substring(customUrl.indexOf('//') + 2, url.length);
    }
    if (customUrl.indexOf('/') != -1) {
      customUrl = customUrl.substring(customUrl.indexOf('/'), url.length);
    }
    if (customUrl.indexOf('?') != -1) {
      customUrl = customUrl.substring(0, customUrl.indexOf('?'));
    }
    return customUrl;
  }
};
oocl_piwik_common = new oocl_piwik.Common();
oocl_piwik.Tracker = function () { };
oocl_piwik.Tracker = function () {
  this.setupContext = function (bfName) {
    if (_piwik_disable)
      return;
    oocl_piwik_bfName = bfName;
    oocl_piwik_customUrl = bfName;
  }
  this._clearContext = function () {
    oocl_piwik_bfName = null;
    oocl_piwik_customUrl = null;
  }
  this._createContext = function () {
    if (_piwik_disable)
      return;
    var context = new oocl_piwik.Context(oocl_piwik_bfName, oocl_piwik_customUrl);
    var uuid = oocl_piwik.uuid.generateUUID();
    localStorage.setItem(uuid, JSON.stringify(context));
    this._clearContext();
    return uuid;
  };
  this._startTiming = function (uuid) {
    if (_piwik_disable)
      return;
    var context = JSON.parse(localStorage.getItem(uuid));
    if (context === null) {
      return;
    }
    context.startTime = new Date();
    localStorage.setItem(uuid, JSON.stringify(context));
  };
  this._endTiming = function (uuid, bfName) {
    if (_piwik_disable)
      return;
    if (uuid && bfName) {
      var context = JSON.parse(localStorage.getItem(uuid));
      if (context === null) {
        return;
      }
      context.endTime = new Date();
      context.startTime = new Date(context.startTime);
      _paq.push(['setCustomUrl', context.customUrl]);

      //For Cat case which will return business function name in response
      if (typeof (bfName) === 'undefined' || bfName === null || bfName.length === 0) {
        _paq.push(['setDocumentTitle', context.bfName]);
      } else {
        _paq.push(['setDocumentTitle', bfName]);
      }
      _paq.push(['setGenerationTimeMs', context.endTime.getTime() - context.startTime.getTime()]);
      _paq.push(['setUserId', _piwik_cvalue]);
      _paq.push(['trackPageView']);
      localStorage.removeItem(uuid);
    }
  }
};
oocl_piwik_tracker = new oocl_piwik.Tracker();

oocl_piwik.Context = function (bfName, customUrl) {
  if (bfName == undefined) {
    this.bfName = oocl_piwik_common._getDocTitle()
  } else {
    this.bfName = bfName;
  }
  oocl_piwik_bfName = this.bfName;

  if (customUrl == undefined) {
    this.customUrl = oocl_piwik_common._getCustomUrl()
  } else {
    this.customUrl = customUrl;
  }
  oocl_piwik_customUrl = this.customUrl;
}


//http://www.angulartutorial.net/2014/05/set-headers-for-all-http-calls-in.html
//http://stackoverflow.com/questions/26111734/how-to-set-common-request-headers-for-every-ajax-request-in-ext5




oocl_piwik.Form = function (form) { };
oocl_piwik.Form = function (form) {
  this._reset = function () {
    this.detectionDate = oocl_piwik_common._getCurrentTime();
    this.fieldsWithUpdates = [];
    this.firstFieldEngagementDate = null;
    this.lastFieldEngagementDate = null;
    this.timeOffWindowSinceEngagement = 0;
    this.timeOffWindowBeforeEngagement = 0;
    if (this.fields && this.fields.length) {
      for (var i = 0; i < this.fields.length; i++) {
        this.fields[i]._resetOnFormSubmit()
      }
    }
  };
  this._reset();
  this.fields = [];
  this.firstFieldEngagementDate = null;
  this.lastFieldEngagementDate = null;
  this.hesitationTimeTracked = false;
  this.formStartTracked = false;
  this.node = form;
  this.formId = form.getAttribute('id');
  this.formName = form.getAttribute("name");
  this.entryFieldName = "";
  this.exitFieldName = "";
  this.lastFocusedFieldName = "";
  this.fieldsWithUpdates = [];
  this.fieldNodes = [];
  this.timeOffWindow = 0;
  this.timeLastTrackingRequest = 0;
  this.timeOffWindowBeforeEngagement = 0;
  this.timeOffWindowSinceEngagement = 0;


  window.addEventListener('focus', function () {
    if (!this.timeWindowBlur) {
      return
    }
    var currentTime = oocl_piwik_common._getCurrentTime();
    var timeOff = currentTime - this.timeWindowBlur;
    this.timeWindowBlur = null;
    if (timeOff < 0) {
      timeOff = 0
    }
    if (this.timeLastTrackingRequest) {
      this.timeLastTrackingRequest = this.timeLastTrackingRequest + timeOff;
    }
    if (this.firstFieldEngagementDate) {
      this.timeOffWindowSinceEngagement += timeOff;
    } else {
      this.timeOffWindowBeforeEngagement += timeOff;
    }
  });


  window.addEventListener('blur', function () {
    this.timeWindowBlur = oocl_piwik_common._getCurrentTime();
  });


  form.addEventListener('submit', function () {
    this._trackFormSubmit();
  });



  this._trackFormSubmit = function () {
    this._setEngagedWithForm();
    var timeSpentOnForm = this.lastFieldEngagementDate - this.firstFieldEngagementDate - this.timeOffWindowSinceEngagement;
    if (timeSpentOnForm < 0) {
      timeSpentOnForm = 0;
    }
    var queryString = {
      fa_su: 1,
      fa_tts: timeSpentOnForm
    };
    this._sendUpdate(this.fieldsWithUpdates, queryString);
    this._reset();
  };


  this._setEngagedWithForm = function () {
    this.lastFieldEngagementDate = oocl_piwik_common._getCurrentTime();
    if (!this.firstFieldEngagementDate) {
      this.firstFieldEngagementDate = this.lastFieldEngagementDate;
    }
  };


  this._trackFieldUpdate = function (field) {
    if (this.fieldsWithUpdates.indexOf(field) == -1) {
      this.fieldsWithUpdates.push(field);
    }
    this._scheduleSendUpdate();
  };


  this._scheduleSendUpdate = function () {
    if (this.trackingTimeout) {
      clearTimeout(this.trackingTimeout);
      this.trackingTimeout = null
    }
    var me = this;
    this.trackingTimeout = setTimeout(function () {
      var fields = me.fieldsWithUpdates;
      me.fieldsWithUpdates = [];
      me._sendUpdate(fields);
    }, 1750);
  };


  this._sendUpdate = function (fields, data) {
    var dataToSend = {};
    if (data)
      dataToSend = data;
    dataToSend.fa_id = this.formId || '';
    dataToSend.fa_name = this.formName || '';
    if (this.entryFieldName) {
      dataToSend.fa_ef = this.entryFieldName
    }
    if (this.exitFieldName) {
      dataToSend.fa_lf = this.exitFieldName
    }
    if (this.firstFieldEngagementDate) {
      if (!this.formStartTracked) {
        dataToSend.fa_st = "1";
        this.formStartTracked = true
      }
      if (!this.hesitationTimeTracked) {
        dataToSend.fa_ht = this.firstFieldEngagementDate - this.detectionDate - this.timeOffWindowBeforeEngagement;
        this.hesitationTimeTracked = true
      }
      if (this.lastFieldEngagementDate && this.timeLastTrackingRequest) {
        dataToSend.fa_ts = this.lastFieldEngagementDate - this.timeLastTrackingRequest;
        if (dataToSend.fa_ts < 0) {
          dataToSend.fa_ts = 0
        }
      }
      else {
        if (this.lastFieldEngagementDate && !this.timeLastTrackingRequest) {
          dataToSend.fa_ts = this.lastFieldEngagementDate - this.firstFieldEngagementDate - this.timeOffWindowSinceEngagement;
          if (dataToSend.fa_ts < 0) {
            dataToSend.fa_ts = 0
          }
        }
      }
      this.timeLastTrackingRequest = oocl_piwik_common._getCurrentTime();
    }
    var fieldsData = [];
    for (var i = 0; i < fields.length; i++) {
      var trackingParams = fields[i]._getTrackingParams();
      fieldsData.push(trackingParams);
    }
    for (var param in data) {
      dataToSend[param] = data[param];
    }
    dataToSend.fa_fields = JSON.stringify(fieldsData);

    dataToSend = oocl_piwik_common._convertToQueryString(dataToSend);

    var tracker = oocl_piwik_common._getTracker();
    tracker.trackRequest(dataToSend, null, null, 'MyPlugin');
  };

  this._addFormField = function (field) {
    this.fields.push(field);
  };

  this._scanForFields = function () {
    var fields = oocl_piwik_common._findAllFieldElements(this.node);
    for (var i = 0; i < fields.length; i++) {
      var field = new oocl_piwik.Field(this, fields[i]);
      this._addFormField(field);
    }
  };
  this._scanForFields();
};


oocl_piwik.Field = function (form, field) { };
oocl_piwik.Field = function (form, field) {
  this.discoveredDate = oocl_piwik_common._getCurrentTime();
  this.tracker = form;
  this.timespent = 0;
  this.hesitationtime = 0;
  this.nodes = [];
  this.tagName = field.tagName;
  this.fieldName = field.getAttribute('name');
  this.fieldType = field.getAttribute('type');
  this.startFocus = null;
  this.timeLastChange = null;
  this.numChanges = 0;
  this.numFocus = 0;
  this.numDeletes = 0;
  this.numCursor = 0;
  this.canCountChange = true;
  this.isFocusedCausedAuto = null;
  if (field.getAttribute('autofocus'))
    this.isFocusedCausedAuto = true;
  else this.isFocusedCausedAuto = false;

  this._isAutoFocus = function () {
    if (!this.isFocusedCausedAuto) {
      return false
    }
    if (this.tracker.entryFieldName && this.tracker.entryFieldName !== this.fieldName) {
      this.isFocusedCausedAuto = false
    }
    if (this.tracker.exitFieldName && this.tracker.exitFieldName !== this.fieldName) {
      this.isFocusedCausedAuto = false
    }
    return this.isFocusedCausedAuto;
  };

  this._onFocus = function () {
    this.startFocus = oocl_piwik_common._getCurrentTime();
    var isDifferent = this.fieldName !== this.tracker.lastFocusedFieldName;
    if (this.tracker.lastFocusedFieldName && isDifferent) {
      this.isFocusedCausedAuto = false;
    }
    this.timeLastChange = null;
    this.hasChangedValueSinceFocus = false;
    this.tracker.lastFocusedFieldName = this.fieldName;
    if (!this._isAutoFocus() && isDifferent) {
      this.canCountChange = true;
      this.numFocus++;
      this.tracker._setEngagedWithForm();
      this.tracker._trackFieldUpdate(this);
      this.tracker.exitFieldName = this.fieldName;
      this.tracker._scheduleSendUpdate();
    }
  }

  this._onBlur = function () {
    if (!this.startFocus) {
      return
    }
    if (this.hasChangedValueSinceFocus) {
      if (this.timeLastChange && this.startFocus) {
        this.timespent += (this.timeLastChange - this.startFocus)
      }
      this.timeLastChange = null;
      this.startFocus = null;
      return
    }
    if (!this._isAutoFocus()) {
      var currentTime = oocl_piwik_common._getCurrentTime();
      this.timespent += currentTime - this.startFocus;
      if (!this.numChanges) {
        this.hesitationtime += currentTime - this.startFocus
      }
      this.tracker._setEngagedWithForm();
      this.tracker._trackFieldUpdate(this)
    }
    this.startFocus = null;
  };

  this._onKeyup = function (e) {
    var keyCode = e.keyCode;
    if (keyCode >= 37 && keyCode <= 40) {
      if (!this._isBlank()) {
        this.numCursor++;
        this.tracker._trackFieldUpdate(this);
      }
      return;
    }
    if (keyCode == 8 || keyCode == 46) {
      if (!this._isBlank()) {
        this.numDeletes++;
        this.tracker._trackFieldUpdate(this);
      }
      return;
    }
    this._onChange();
  };

  this._onChange = function () {
    this.timeLastChange = oocl_piwik_common._getCurrentTime();
    if (this._isAutoFocus()) {
      this.startFocus = this.timeLastChange
    } else {
      if (!this.startFocus) {
        return
      }
    }
    this.isFocusedCausedAuto = false;
    this.hasChangedValueSinceFocus = true;

    if (!this.numChanges) {
      this.hesitationtime += this.timeLastChange - this.startFocus;
    }
    if (this.canCountChange) {
      this.numChanges++;
      this.canCountChange = false;
    }

    if (!this.tracker.entryFieldName) {
      this.tracker.entryFieldName = this.fieldName;
    }

    this.tracker._setEngagedWithForm();
    this.tracker._trackFieldUpdate(this);
  };

  this._isBlank = function () {
    return String(this.nodes[0].value).length == 0;
  };
  this._getTrackingParams = function () {
    return {
      fa_fts: this._getTimeSpent(),
      fa_fht: this._getHesitationTime(),
      fa_fb: this._isBlank(),
      fa_fn: this.fieldName,
      fa_fch: this.numChanges,
      fa_ff: this.numFocus,
      fa_fd: this.numDeletes,
      fa_fcu: this.numCursor,
      fa_ft: this.fieldType || this.tagName,
      fa_fs: this._getFieldSize()
    }
  };

  this._resetOnFormSubmit = function () {
    this.hesitationtime = 0;
    this.timespent = 0;
    this.numFocus = 0;
    this.numDeletes = 0;
    this.numCursor = 0;
    this.numChanges = 0;
    this.startFocus = null;
    this.timeLastChange = null;
    this.canCountChange = true;
    this.hasChangedValueSinceFocus = false;
    this.isFocusedCausedAuto = false
  };

  this._getTimeSpent = function () {
    if (this.numChanges && !this.timeSpent) {
      this.timeSpent = 1
    }
    if (!this.startFocus || this._isAutoFocus()) {
      return this.timespent
    }
    if (this.timeLastChange) {
      var timespent = this.timeLastChange - this.startFocus;
      if (timespent < 0) {
        timespent = 0
      }
      return this.timespent + timespent
    }
    return this.timespent + oocl_piwik_common._getCurrentTime() - this.startFocus
  };

  this._getFieldSize = function () {
    return String(this.nodes[0].value).length;
  };

  this._getHesitationTime = function () {
    if (this.numChanges || !this.startFocus || this._isAutoFocus()) {
      return this.hesitationtime
    }
    var currentTime = oocl_piwik_common._getCurrentTime();
    return this.hesitationtime + (currentTime - this.startFocus)
  };

  if (field === document.activeElement) {
    this._onFocus();
  }
  this._addNode = function (field) {
    this.nodes.push(field);
    var me = this;
    field.addEventListener('focus', function () {
      me._onFocus();
    });
    field.addEventListener('blur', function () {
      me._onBlur();
    });
    field.addEventListener('change', function () {
      me._onChange();
    });
    field.addEventListener('keyup', function (e) {
      me._onKeyup(e);
    });
    field.addEventListener('paste', function () {
      me._onChange();
    });
  };
  this._addNode(field);
}