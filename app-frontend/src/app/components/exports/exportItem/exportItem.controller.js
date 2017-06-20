export default class ExportItemController {
    constructor(
        $scope, $attrs, thumbnailService, mapService,
        datasourceService) {
        'ngInject';
        this.thumbnailService = thumbnailService;
        this.mapService = mapService;
        this.isSelectable = $attrs.hasOwnProperty('selectable');
        this.isDraggable = $attrs.hasOwnProperty('draggable');
        this.isEditable = $attrs.hasOwnProperty('editable');
        this.datasourceService = datasourceService;
        this.$scope = $scope;
    }

    $onInit() {
        this.isShowingDownloads = false;
    }

    shouldAllowDownload() {
        return this.export.exportStatue === 'EXPORTED';
    }

    showDownloads() {
        this.isShowingDownloads = true;
    }

    onAction(event) {
        this.onAction({export: this.export});
        event.stopPropagation();
    }

    onView(event) {
        this.onView({export: this.export});
        event.stopPropagation();
    }

    onDownload(event) {
        this.onDownload({export: this.export});
        event.stopPropagation();
    }
}
