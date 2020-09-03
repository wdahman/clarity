/*
 * Copyright (c) 2016-2020 VMware, Inc.
 * All Rights ReserveThis software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Rule, SchematicsException, Tree } from '@angular-devkit/schematics';
import { JSDOM } from 'jsdom';

// function migrateAlerts(html: string): string {
//   // const dom = new JSDOM(html, {includeLocations: true});
//   const dom = new JSDOM(html, {includeNodeLocations: true});
//   const alert = dom.window.document.querySelector('clr-alert');
//   // const locations = dom.nodeLocations(alert);
//   const locations = dom.nodeLocation(alert);
//   console.log(locations);
//
//   if (!locations) {
//     // throw new SchematicsException(`<clr-alert> could not be found in ${TEMPLATE_PATH}`);
//     throw new SchematicsException(`<clr-alert> could not be found in the template`);
//   }
//   console.log(alert);
//   return html;
// }

export function updateBasicAlert(): Rule {
  // return (tree: Tree) => {
  //   const buffer = tree.read(TEMPLATE_PATH);
  //   const content = buffer?.toString();
  //   if (!content) {
  //     throw new SchematicsException(`Template ${TEMPLATE_PATH} not found`);
  //   }
  //
  //   // the includeLocations flag is very important here
  //   const dom = new JSDOM(content, { includeNodeLocations: true });
  //   const element = dom.window.document.querySelector('ul');
  //   const locations = dom.nodeLocations(element);
  //   if (!locations) {
  //     throw new SchematicsException(`<ul> could not be found in ${TEMPLATE_PATH}`);
  //   }
  //
  //   // now we update the template using the tree recorder
  //   // we don't use jsdom to directly update the template
  //   const recorder = tree.beginUpdate(TEMPLATE_PATH);
  //   const listItem = `  <li><a href="/contact">contact</a></li>\n`
  //   recorder.insertLeft(locations.endTag.startOffset, listItem);
  //   tree.commitUpdate(recorder);
  //
  //   return tree;
  // };
  return (tree: Tree) => {
    // return tree;
    const actions = tree.actions;

    // actions.forEach(action => console.log(action.path));
    const files = actions.filter(action => {
      if (action.path.endsWith('.html') || action.path.endsWith('.ts')) {
        return action;
      }
    });

    files.forEach(file => {
      if (file.path.endsWith('.html')) {
        // const htmlBuffer = tree.read(file.path);
        // const htmlContent = htmlBuffer!.toString('utf-8');

        const buffer = tree.read(file.path);
        const content = buffer?.toString();
        if (file.path === '/src/index.html') {
          return;
        }
        // console.log('file.path: ', file.path);
        // console.log('content string: ', content);
        if (!content) {
          throw new SchematicsException(`Template ${file.path} not found`);
        }

        // the includeLocations flag is very important here
        const dom = new JSDOM(content, { contentType: 'text/html', includeNodeLocations: true });
        const element = dom.window.document.querySelector('clr-alert');
        // @ts-ignore
        console.log('element to replace', element.getAttributeNames());
        // @ts-ignore
        const locations = dom.nodeLocation(element);
        // console.log(locations);
        if (!locations) {
          throw new SchematicsException(`<clr-alert> could not be found in ${file.path}`);
          return;
        }

        // now we update the template using the tree recorder
        // we don't use jsdom to directly update the template
        const recorder = tree.beginUpdate(file.path);
        console.log('recorder', recorder);
        recorder.remove(locations.startTag.startOffset, locations.endTag.endOffset - locations.startTag.startOffset);
        const cdsAlert = `<cds-alert-group status="info">
        <cds-alert closable>
          This is the cds-alert-group with one cds-alert.
        </cds-alert>
      </cds-alert-group>`;
        recorder.insertLeft(locations.startTag.startOffset, cdsAlert);
        tree.commitUpdate(recorder);
      }
    });
  };
}
