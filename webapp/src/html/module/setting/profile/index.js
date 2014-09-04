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
     * @class   {_$$ModuleAccountProfile}
     * @extends {_$$Module}
     * @param   {Object}  可选配置参数，已处理参数列表如下所示
     */
    _p._$$ModuleAccountProfile = _k._$klass();
    _pro = _p._$$ModuleAccountProfile._$extend(_m._$$Module);
    /**
     * 构建模块
     * @return {Void}
     */
    _pro.__doBuild = function(){
        this.__super();
        this.__body = _e._$html2node(
            _t0._$getTextTemplate('module-id-c')
        );
        _v._$addEvent(
            _e._$getByClassName(this.__body,'j-flag')[0],
            'click',this.__onPublishMessage._$bind(this)
        );
    };
    /**
     * 接收消息
     * @param {Object} _event
     */
    _pro.__onMessage = function(_event){
        console.log(
            'receive message from '+
            _event.from+' and say: '+
            JSON.stringify(_event.data)
        );
    };
    /**
     * 发布消息
     */
    _pro.__onPublishMessage = function(){
        this.__doPublishMessage(
            'onok',{a:'aaaa',b:'bbbbb'}
        );
    };
    // notify dispatcher
    _t1._$regist('setting-profile',_p._$$ModuleAccountProfile);
});
