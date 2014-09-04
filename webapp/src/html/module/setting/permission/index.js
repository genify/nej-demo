/*
 * ------------------------------------------
 * 项目模块基类实现文件
 * @version  1.0
 * @author   genify(caijf@corp.netease.com)
 * ------------------------------------------
 */
NEJ.define([
    'base/klass',
    'base/element',
    'base/event',
    'util/template/tpl',
    'util/dispatcher/module',
    'pro/module/module'
],function(_k,_e,_v,_t0,_t1,_m,_p,_o,_f,_r){
    // variable declaration
    var _pro;
    /**
     * 项目模块基类对象
     * @class   {_$$ModulePermission}
     * @extends {_$$Module}
     * @param   {Object}  可选配置参数，已处理参数列表如下所示
     */
    _p._$$ModulePermission = _k._$klass();
    _pro = _p._$$ModulePermission._$extend(_m._$$Module);
    /**
     * 构建模块
     * @return {Void}
     */
    _pro.__doBuild = function(){
        this.__super();
        this.__body = _e._$html2node(
            _t0._$getTextTemplate('module-id-e')
        );
        // subscribe /m/setting/account/ message
        /*
        this.__dispatcher._$subscribe(
            '/m/setting/account/','onok',
            this.__onSubscribe._$bind(this)
        );
        */
        // send message to /m/setting/account/
        _v._$addEvent(
            _e._$getByClassName(this.__body,'j-flag')[0],
            'click',this.__onSendMessage._$bind(this)
        );
    };
    /**
     * 接收订阅消息
     * @param {Object} _event
     */
    _pro.__onSubscribe = function(_event){
        console.log('hi,i\'m '+this.__umi+', subscribe message from '+_event.from+' and say: '+JSON.stringify(_event.data));
    };
    /**
     * 发送点对点消息
     */
    _pro.__onSendMessage = function(){
        this.__doSendMessage(
            '/m/setting/account/',
            {d:'ddddd',e:'eeeeee'}
        );
    };
    // notify dispatcher
    _t1._$regist('setting-permission',_p._$$ModulePermission);
});