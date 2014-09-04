/*
 * ------------------------------------------
 * 标签列表模块实现文件
 * @version  1.0
 * @author   genify(caijf@corp.netease.com)
 * ------------------------------------------
 */
NEJ.define([
    'base/klass',
    'base/element',
    'util/tab/view',
    'util/template/tpl',
    'util/dispatcher/module',
    'pro/module/module'
],function(_k,_e,_t0,_t1,_t2,_m,_p,_o,_f,_r){
    // variable declaration
    var _pro;
    /**
     * 标签列表模块
     * @class   {_$$ModuleSettingAccountTab}
     * @extends {_$$Module}
     * @param   {Object}  可选配置参数，已处理参数列表如下所示
     */
    _p._$$ModuleSettingAccountTab = _k._$klass();
    _pro = _p._$$ModuleSettingAccountTab._$extend(_m._$$Module);
    /**
     * 构建模块
     * @return {Void}
     */
    _pro.__doBuild = function(){
        this.__super();
        this.__body = _e._$html2node(
            _t1._$getTextTemplate('module-id-9')
        );
        this.__tbview = _t0._$$TabView._$allocate({
            list:_e._$getChildren(this.__body,'j-flag'),
            oncheck:this.__doCheckMatchEQ._$bind(this)
        });
    };
    /**
     * 刷新模块
     * @param  {Object} 配置信息
     * @return {Void}
     */
    _pro.__onRefresh = function(_options){
        this.__super(_options);
        this.__tbview._$match(
            this.__doParseUMIFromOpt(_options)
        );
    };
    /**
     * 验证选中项
     * @param  {Object} 事件信息
     * @return {Void}
     */
    _pro.__doCheckMatchEQ = function(_event){
        if (_event.target=='/setting/'){
            _event.target = '/setting/account/';
        }
        _event.matched = _event.target==_event.source;
    };
    // notify dispatcher
    _t2._$regist('setting-account-tab',_p._$$ModuleSettingAccountTab);
});