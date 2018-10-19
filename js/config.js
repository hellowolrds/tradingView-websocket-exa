var light = {
  preset: "mobile",
  container_id: 'tv_chart_container',
  library_path: './charting_library/',
  disabled_features: [
    'header_chart_type',
    'use_localstorage_for_settings',
    'left_toolbar',
    'header_symbol_search',
    'header_saveload',
    'header_screenshot',
    'header_undo_redo',
    'header_compare',
    'display_market_status',
    'go_to_date',
    'header_resolutions',
    'volume_force_overlay',
    'header_fullscreen_button',
    'header_indicators',
  ],
  enabled_features: ["", "hide_last_na_study_output"],
  client_id: 'tradingview.com',
  user_id: 'public_user_id',
  fullscreen: false,
  autosize: true,
  custom_css_url: './view.css',
  overrides: {
    'paneProperties.background': "#FFFFFF",
    'scalesProperties.textColor': "#e6e6e6",
    'mainSeriesProperties.barStyle.upColor': "#00CE7D", //蜡烛图颜色-绿
    'mainSeriesProperties.barStyle.downColor': "#E55541",//蜡烛图颜色-红
  },
  studies_overrides: { //布林柱状图颜色
    "volume.precision": 4,
    "volume.volume.color.1": "#00ce7d", //绿
    "volume.volume.color.0": "#e55541",//红
  },
  time_frames: [],
}

var dark = {
  preset: "mobile",
  container_id: 'tv_chart_container',
  library_path: './charting_library/',
  disabled_features: [
    'header_chart_type',
    'use_localstorage_for_settings',
    'left_toolbar',
    'header_symbol_search',
    'header_saveload',
    'header_screenshot',
    'header_undo_redo',
    'header_compare',
    'display_market_status',
    'go_to_date',
    'header_resolutions',
    'volume_force_overlay',
    'header_fullscreen_button',
    'header_indicators',
  ],
  enabled_features: ["", "hide_last_na_study_output"],
  client_id: 'tradingview.com',
  user_id: 'public_user_id',
  fullscreen: false,
  autosize: true,
  custom_css_url: './view.css',
  overrides: {
    'paneProperties.background': "#000000",
    'scalesProperties.textColor': "#FFFFFF",
    'mainSeriesProperties.barStyle.upColor': "#00CE7D", //蜡烛图颜色-绿
    'mainSeriesProperties.barStyle.downColor': "#E55541",//蜡烛图颜色-红
  },
  studies_overrides: { //布林柱状图颜色
    "volume.precision": 4,
    "volume.volume.color.1": "#00ce7d", //绿
    "volume.volume.color.0": "#e55541",//红
  },
  time_frames: [],
}

var tradingConfig = {
  light: light,
  dark: dark
}