import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';
import { css } from '../../../styled-system/css';
import '../../../styled-system/styles.css';
import './my-component.css';

@Component({
  tag: 'my-component',
  styleUrl: '../../../styled-system/styles.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return (
      <div class={css({ color: 'red', padding: '1rem' })}>
        Hello, World! I'm {this.getText()}
      </div>
    );
  }
}
