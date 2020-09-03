/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Rule, Tree, SchematicContext, chain } from '@angular-devkit/schematics';
import { updateBasicAlert } from './utils/update-basic-alert-rule';

export function migrateAlert(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const rule = chain([updateBasicAlert()]);
    context.logger.info(`Migrating clr-alert to cds-alert-group...`);
    return rule(tree, context);

    // const dir = tree.getDir(path);
    // console.log('tree actions', tree.actions);
    // console.log('it runs');
    // updateBasicAlert(options);
    // return tree;
  };
}
