import {Env} from '../../../types';

export async function addEslint(env: Env) {
  const {workspace, fs} = env;

  await fs.write(
    fs.join(workspace.root(), '.eslintrc.js'),
    (await import('./templates/eslintrc-js')).default()
  );
  workspace.install('eslint');
  workspace.install('eslint-plugin-hydrogen');
}
