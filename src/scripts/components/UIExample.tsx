import { h, app } from 'hyperapp';
import { fooContent, IExampleContent } from '../base/example-content';
import rawRender from '../base/raw-render';

export interface IState {
  isVisible: boolean;
  content?: IExampleContent;
}

const state: IState = {
  isVisible: false,
  content: undefined,
};

export interface IActions {
  show: (content: IExampleContent) => (state: IState) => IState;
  hide: () => (state: IState) => IState;
}

const actions: IActions = {
  show: (content: IExampleContent) => (state: IState) => ({
    isVisible: true,
    content,
  }),
  hide: () => (state: IState) => ({
    isVisible: false,
    content: undefined,
  }),
};

const view = (state: IState, actions: IActions) => {
  if (!state.content) return <div class="UIExample_inner" />;

  const innerClassNames = [`UIExample_inner`];
  if (state.isVisible) innerClassNames.push('isVisible');

  return (
    <div class={innerClassNames.join(' ')}>
      <h2 class="UIExample_head">UIExample</h2>
      <div class="UIExample_content" oncreate={rawRender(state.content.html)} />
    </div>
  );
};

export default (selector: string = '.UIExample') =>
  app(state, actions, view, document.querySelector(selector));
