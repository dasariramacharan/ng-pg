import { CustomAngularMaterialModuleModule } from './custom-angular-material-module.module';

describe('CustomAngularMaterialModuleModule', () => {
  let customAngularMaterialModuleModule: CustomAngularMaterialModuleModule;

  beforeEach(() => {
    customAngularMaterialModuleModule = new CustomAngularMaterialModuleModule();
  });

  it('should create an instance', () => {
    expect(customAngularMaterialModuleModule).toBeTruthy();
  });
});
