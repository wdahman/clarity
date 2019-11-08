/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'clr-timeline-component',
  templateUrl: './timeline-component.html',
})
export class TimelineComponentDemo {
  props = [
    {
      name: '[clrLayout]',
      values: "'horizontal' | 'vertical'",
      defaultValue: "'horizontal'",
      description: "Define if the timeline shall be 'horizontal' or 'vertical'",
    },
  ];

  stepProps = [
    {
      name: '[clrState]',
      values: 'not-started | success | error | current | processing',
      defaultValue: 'not-started',
      description: 'Set the state of the step and render the corresponding icon in the UI.',
    },
  ];
}
