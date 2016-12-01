export default angular.module('index.components', [
    require('./components/leafletMap/leafletMap.module.js').name,
    require('./components/navBar/navBar.module.js').name,
    require('./components/toolSearch/toolSearch.module.js').name,
    require('./components/toolItem/toolItem.module.js').name,
    require('./components/filterPane/filterPane.module.js').name,
    require('./components/colorCorrectPane/colorCorrectPane.module.js').name,
    require('./components/colorCorrectScenes/colorCorrectScenes.module.js').name,
    require('./components/colorCorrectAdjust/colorCorrectAdjust.module.js').name,
    require('./components/channelHistogram/channelHistogram.module.js').name,
    require('./components/mosaicScenes/mosaicScenes.module.js').name,
    require('./components/sceneItem/sceneItem.module.js').name,
    require('./components/sceneDetail/sceneDetail.module.js').name,
    require('./components/projectItem/projectItem.module.js').name,
    require('./components/selectedScenesModal/selectedScenesModal.module.js').name,
    require('./components/confirmationModal/confirmationModal.module.js').name,
    require('./components/projectAddModal/projectAddModal.module.js').name,
    require('./components/refreshTokenModal/refreshTokenModal.module.js').name,
    require('./components/downloadModal/downloadModal.module.js').name,
    require('./components/featureFlagOverrides/featureFlagOverrides.module.js').name
]);
