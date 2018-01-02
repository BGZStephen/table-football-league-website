import { ComponentFactoryResolver, Injectable, Inject, ReflectiveInjector } from '@angular/core';
import { UserSearchComponent } from 'app/components/users/user-search/user-search.component';

@Injectable()
export class ModalService {

  constructor(
    @Inject(ComponentFactoryResolver) factoryResolver
  ) {
    this.factoryResolver = factoryResolver
  }

  setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef
  }

  userSearch: {
    open(params) {
      const factory = this.factoryResolver
        .resolveComponentFactory(UserSearchComponent)

      const component = factory
        .create(this.rootViewContainer.parentInjector)

      component.instance.close = params.close;
      component.instance.userSelect = params.userSelect;

      this.rootViewContainer.insert(component.hostView)
    }
  }
}
