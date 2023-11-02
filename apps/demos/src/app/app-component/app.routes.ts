import { Routes } from '@angular/router';
import { HomeComponent } from '../features/home/home.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'concepts',
    loadChildren: () =>
      import('../features/concepts/fundamentals.module').then(
        (m) => m.FundamentalsModule
      ),
  },
  {
    path: 'template',
    loadChildren: () =>
      import('../features/template/template-shell.module').then(
        (m) => m.TemplateShellModule
      ),
  },
  {
    path: 'state',
    loadChildren: () =>
      import('../features/state/state-shell.module').then(
        (m) => m.StateShellModule
      ),
  },
  {
    path: 'tutorials',
    loadChildren: () =>
      import('../features/tutorials/tutorials-shell.module').then(
        (m) => m.TutorialsShellModule
      ),
  },
  {
    path: 'integrations',
    loadChildren: () =>
      import('../features/integrations/integrations-shell.module').then(
        (m) => m.IntegrationsShellModule
      ),
  },
  {
    path: 'experiments',
    loadChildren: () =>
      import('../features/experiments/experiments-shell.module').then(
        (m) => m.ExperimentsShellModule
      ),
  },
  {
    path: 'performance',
    loadChildren: () =>
      import('../features/performance/performance-shell.module').then(
        (m) => m.PerformanceShellModule
      ),
  },
];
