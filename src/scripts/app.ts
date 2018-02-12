import 'sanitize.css';
import '../styles/app.scss';
import UIExample from './components/UIExample';
import { fooContent } from './base/example-content';

{
  let uiExample;

  const initComponents = () => {
    uiExample = UIExample();
  };

  const initEvents = () => {
    document
      .getElementById('show')
      .addEventListener('click', () => uiExample.show(fooContent));
    document
      .getElementById('hide')
      .addEventListener('click', () => uiExample.hide());
  };

  document.addEventListener('DOMContentLoaded', () => {
    initComponents();
    initEvents();
  });
}
