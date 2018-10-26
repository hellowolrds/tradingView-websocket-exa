
var _baseUrl = "192.168.21.135:8081";
var rss = null;
var widget = null;
var _symbol = 'BTC_USDT';
var _language = 'en';
var _datafeedUrl = 'http://' + _baseUrl + '/v1';
var _resolution = '5';
var _theme = 'light';
var _chartType = '1';
var initTimer = null;
var loading = true;
var pageInitFinish = false;
var waitInitTimer = null;

window.onload = function(){
  pageInitFinish = true;
  // startChart();
}

function startChart(baseUrl, symbol, language, resolution, theme, chartType){
  _baseUrl = baseUrl || _baseUrl;
  _symbol = symbol || _symbol;
  _language = language || _language;
  _resolution = resolution || _resolution;
  _theme = theme || _theme;
  _chartType = chartType || _chartType;

  waitInitTimer = setInterval(function(){
    if(!pageInitFinish) return ;
    clearInterval(waitInitTimer);

    rss = new WebSocketClient({
      socketUrl: "ws://" + _baseUrl + "/ws",
    }, {
      onopen: function(){
        initChart();
      }
    })
  }, 100)
}

function initChart(){
  initTimer && clearTimeout(initTimer);
  initTimer = setTimeout(function(){
    loading = true;
    rss && rss._closeCurrentKline && rss._closeCurrentKline();

    var config = tradingConfig[_theme];

    config.symbol = _symbol;
    config.interval = _resolution;
    config.locale = _language;
    config.datafeed = new Datafeeds(_datafeedUrl, rss)

    widget = new TradingView.widget(config)
    widget.onChartReady(function(){
      createStudyAuto('Moving Average', 'first');
      setChartType(_chartType);
      widget.chart().onDataLoaded().subscribe(null, function(){
        loading = false;
      })
    });
  }, 200)
}

function setTheme(theme){
  _theme = theme;
  initChart();
}

function setSymbol(symbol){
  _symbol = symbol;
  initChart();
}

function setLanguage(language){
  _language = language;
  initChart();
}

function setResolution(interval){
  _resolution = interval;
  if(widget){
    if(loading) return false;
    loading = true;
    widget.chart().setResolution(_resolution, function(){
      loading = false;
    });
  }else{
    initChart();
  }
  return true;
}

function setChartType(chartType){
  if(widget){
    setResolution('1');
    widget.chart().setChartType(Number(chartType));
  }
}

function createStudy(){
  if(!widget || !widget.chart()){
    return false
  }
  return widget.chart().createStudy.apply(widget.chart(), arguments)
}

function createStudyAuto(key, type){
  var studiesMap = {
    first: ['Moving Average', 'Bollinger Bands'],
    second: ['MACD', 'Stochastic', 'Relative Strength Index', 'Williams %R']
  }

  var studies = studiesMap[type] || [];
  var current_studies = getAllStudies() || [];

  current_studies.forEach(function(study){
    if(~studies.indexOf(study.name)){
      removeStudy(study.id);
    }
  });

  key && createStudy(key);
}

function removeStudy(id){
  if(!widget || !widget.chart()){
    return false
  }
  return widget.chart().removeEntity(id);
}

function getAllStudies(){
  if(!widget || !widget.chart()){
    return false
  }
  return widget.chart().getAllStudies()
}

function testConsole(t){
  return t;
}

window.onerror = function(err) {
  console.warn('Error:', err)
}
