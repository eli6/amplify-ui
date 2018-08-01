import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy, Output, EventEmitter } from '@angular/core';

import { DynamicComponentDirective } from '../../../directives/dynamic.component.directive';
import { ComponentMountMap } from '../../component.mount';
import { S3AlbumClass } from './s3-album.class';
// import { S3AlbumComponentIonic } from './s3-album.component.ionic'
// import { S3AlbumComponentCore } from './s3-album.component.core';

@Component({
  selector: 'amplify-s3-album',
  template: `
              <div>
                <ng-template component-host></ng-template>
              </div>
            `
})
export class S3AlbumComponent implements OnInit, OnDestroy {
  @Input() framework: string;
  @Input() path: string;
  @Output()
  selected: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild(DynamicComponentDirective) componentHost: DynamicComponentDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
  }

  ngOnDestroy() {}

  loadComponent() {

    let albumComponent = this.framework && this.framework.toLowerCase() === 'ionic' ? ComponentMountMap('s3AlbumIonic',{path: this.path}) : ComponentMountMap('s3AlbumCore', {path: this.path});

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(albumComponent.component);

    let viewContainerRef = this.componentHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<S3AlbumClass>componentRef.instance).data = albumComponent.data;

    componentRef.instance.selected.subscribe((e) => {
      this.selected.emit(e);
    })

  }
}
