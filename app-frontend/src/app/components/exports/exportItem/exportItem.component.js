// Component code
import exportTpl from './exportItem.html';

const rfExportItem = {
    templateUrl: exportTpl,
    transclude: true,
    controller: 'ExportItemController',
    bindings: {
        export: '<',
        onSelect: '&',
        onAction: '&',
        onView: '&',
        onDownload: '&'
    }
};

export default rfExportItem;
