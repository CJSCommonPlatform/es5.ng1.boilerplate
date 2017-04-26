describe('root component', function() {

  var helper;

  beforeEach(function() {
    helper = new Helper(new Mock());
  });

  describe('[ rendering ]', function () {
    var html;

    beforeEach(function() {
      html = helper.render();
    });

    it('renders root', function() {
      expect(html[0].textContent).toBe('root');
    });

  });


  /**********************************************************
   *
   * Mock
   *
   **********************************************************/

  function Mock() {

    return {
      template: '<root></root>' ,
      bindings: {}
    };
  }

  /**********************************************************
   *
   * Helper
   *
   **********************************************************/

  function Helper(mock) {

    var _html,
        _$compile,
        _$rootScope,
        _mock = mock;

    this.render = render;

    _init();

    function render(bindings) {

      var scope = _$rootScope.$new();
      angular.extend(scope, _mock.bindings);
      _html = _$compile(_mock.template)(scope);
      scope.$digest();
      return _html;
    }

    function _init() {

      _loadModules();
      _injectDependencies();
    }

    function _loadModules() {

      module('components.root');
    }

    function _injectDependencies() {

      inject(function($compile, $rootScope) {

        _$compile = $compile;
        _$rootScope = $rootScope;
      });
    }
  }

});

