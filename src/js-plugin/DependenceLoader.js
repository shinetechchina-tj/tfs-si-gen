var Dependence;
(function (Dependence) {
    var Loader = (function () {
        function Loader() {
            this.resourceLoader = new ResourceLoader();
            this.scriptLoader = new ScriptLoader();
        }
        Loader.prototype.Initialize = function (callback) {
            this.resourceLoader.Init();
            this.scriptLoader.Init();
            callback();
        };
        return Loader;
    })();
    Dependence.Loader = Loader;    
    var ResourceLoader = (function () {
        function ResourceLoader() {
        }
        ResourceLoader.prototype.Init = function () {
        };
        return ResourceLoader;
    })();    
    var ScriptLoader = (function () {
        function ScriptLoader() {
        }
        ScriptLoader.prototype.Init = function () {
        };
        return ScriptLoader;
    })();    
})(Dependence || (Dependence = {}));