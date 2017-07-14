var mySite={
    disable:true
};
for (var i = 0; i < oocl_piwik_config.piwik_sites.length; i++) {
    if (location.href.indexOf(oocl_piwik_config.piwik_sites[i].url) != -1) {
        mySite = oocl_piwik_config.piwik_sites[i];
    }
}
QUnit.test('_isAngular', function (assert) {
    if (oocl_piwik_common._isAngular())
        assert.ok(oocl_piwik_common._isAngular(), 'pass');
    else assert.ok(!oocl_piwik_common._isAngular(), 'pass');
});

QUnit.test('_isExt', function (assert) {
    assert.ok(oocl_piwik_common._isExt(), 'pass');
});

QUnit.test('_getDoctitle', function (assert) {
    if (!oocl_piwik_common._isAngular())
        assert.equal(oocl_piwik_common._getDocTitle(), 'QUnit Test', 'pass');
    else if (mySite.disable) {
        assert.equal(oocl_piwik_common._getDocTitle(), undefined, 'pass');
    }
    else {
        assert.equal(oocl_piwik_common._getDocTitle(), '', 'pass');
    }
});

QUnit.test('_getCustomUrl', function (assert) {
    if (mySite.disable) {
        assert.equal(oocl_piwik_common._getCustomUrl(), undefined, 'pass');
    }
    else if (!oocl_piwik_common._isAngular())
        assert.equal(oocl_piwik_common._getCustomUrl(), 'unit_test.html', 'pass');
    else assert.equal(oocl_piwik_common._getCustomUrl(), '', 'pass');
});

QUnit.test('setupContext', function (assert) {
    if (mySite.disable) {
        oocl_piwik_tracker.setupContext('test');
        assert.ok(oocl_piwik_bfName == null && oocl_piwik_customUrl == null, 'pass');
    }
    else {
        oocl_piwik_tracker.setupContext('test');
        assert.ok(oocl_piwik_bfName == 'test' && oocl_piwik_customUrl == 'test', 'pass');
        oocl_piwik_tracker.setupContext();
        assert.ok(oocl_piwik_bfName == null && oocl_piwik_customUrl == null, 'pass');
    }

});

QUnit.test('_createContext', function (assert) {
    if (mySite.disable) {
        var expect = undefined;
        var actual = oocl_piwik_tracker._createContext();
        assert.propEqual(actual, expect, 'pass');
    }
    else {
        var piwik_uuid = oocl_piwik_tracker._createContext();
        var expect = {
            "bfName": oocl_piwik_common._getDocTitle(),
            "customUrl": oocl_piwik_common._getCustomUrl()
        };
        var actual = JSON.parse(localStorage.getItem(piwik_uuid));
        assert.propEqual(actual, expect, 'pass');
    }

});


QUnit.test('_startTiming', function (assert) {
    if (mySite.disable) {
        var expect = {};
        localStorage.setItem('testuuid', JSON.stringify(expect));
        oocl_piwik_tracker._startTiming('testuuid');
        var actual = JSON.parse(localStorage.getItem('testuuid'));
        assert.propEqual(actual, expect, 'pass');
    }
    else {
        var context = {};
        localStorage.setItem('testuuid', JSON.stringify(context));
        oocl_piwik_tracker._startTiming('testuuid');
        var actual = JSON.parse(localStorage.getItem('testuuid'));
        assert.ok(actual.startTime, 'pass');
        localStorage.removeItem('testuuid');
    }

});


QUnit.test('_endTiming', function (assert) {
    var expect = {};
    oocl_piwik_tracker._endTiming('testuuid', 'test_cat_url');
    var actual = JSON.parse(localStorage.getItem('testuuid'));
    assert.propEqual(actual, expect, 'pass');
    localStorage.removeItem('testuuid');
});



QUnit.test('Context', function (assert) {
    if (mySite.disable) {
        var actual = new oocl_piwik.Context();
        var expect = {
            bfName: undefined,
            customUrl: undefined
        };
        assert.propEqual(actual, expect, 'pass');
    }
    else if (!oocl_piwik_common._isAngular()) {
        var actual = new oocl_piwik.Context('testtitle', 'testurl');
        var expect = {
            bfName: 'testtitle',
            customUrl: 'testurl'
        };
        assert.propEqual(actual, expect, 'pass');
        actual = new oocl_piwik.Context();
        expect = {
            bfName: 'QUnit Test',
            customUrl: 'unit_test.html'
        };
        assert.propEqual(actual, expect, 'pass');
    }
    else {
        actual = new oocl_piwik.Context();
        expect = {
            bfName: '',
            customUrl: ''
        };
        assert.propEqual(actual, expect, 'pass');
    }
});

QUnit.test('_clearContext', function (assert) {
    oocl_piwik_tracker._clearContext();
    assert.ok(oocl_piwik_bfName == null && oocl_piwik_customUrl == null, 'pass');

});

QUnit.test('_ignoreServicePrefix', function (assert) {
    if (mySite.disable) {
        var url = 'http://localhost/piwiktest/fwk_api/test/unit_test.html?user=111&password=222';
        var actual = oocl_piwik_common._ignoreServicePrefix(url);
        var expect = undefined;
        assert.equal(actual, expect, 'pass');
    }
    else {
        var url = 'http://localhost/piwiktest/fwk_api/test/unit_test.html?user=111&password=222';
        var actual = oocl_piwik_common._ignoreServicePrefix(url);
        var expect = '/unit_test.html';
        assert.equal(actual, expect, 'pass');
        url = 'http://localhost/piwiktest/unit_test.html?user=111&password=222';
        actual = oocl_piwik_common._ignoreServicePrefix(url);
        expect = '/piwiktest/unit_test.html';
        assert.equal(actual, expect, 'pass');
    }

});

QUnit.test('extGetCustomUrl', function (assert) {
    var actual = '';
    var done = assert.async();
    var url = 'http://localhost/piwik/piwik.js?user=111&password=222';
    var expect = '/piwik/piwik.js';
    Ext.Ajax.request({
        url: url,
        success: function (data, request) {
            if (mySite.disable) {
                actual = oocl_piwik_common._ignoreServicePrefix(request.url);
                expect = undefined;
                assert.equal(actual, expect, 'pass');
            }
            else {
                actual = oocl_piwik_common._ignoreServicePrefix(request.url);
                assert.equal(actual, expect, 'pass');
            }
            done();
        }
    });
});
