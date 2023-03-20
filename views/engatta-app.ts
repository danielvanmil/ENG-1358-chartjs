import { LitElement, html, customElement, property } from 'lit-element';
import { state } from 'lit/decorators.js';
import '@vaadin/button';
import '@vaadin/custom-field';
import '@vaadin/text-field';
import '@vaadin/avatar';
import '@vaadin/avatar-group';

@customElement('engatta-app')
export class MyElement extends LitElement {
  @property()
  items = [
    {
      firstName: 'foo',
      lastName: 'bar',
    },
    {
      firstName: 'foo',
      lastName: 'bar',
    },
    {
      firstName: 'foo',
      lastName: 'bar',
    },
    {
      firstName: 'foo',
      lastName: 'bar',
    },
    {
      firstName: 'foo',
      lastName: 'bar',
    },
    {
      firstName: 'foo',
      lastName: 'bar',
    },
  ];

  render() {
    return html`
    <vaadin-avatar-group
    style="display:inline-block;width:auto;border:1px solid;"
    .items="${this.items.map((person) => {
      return {
        name: `${person.firstName} ${person.lastName}`,
      };
    })}"
    .maxItemsVisible="${6}"
  ></vaadin-avatar-group> 

  <vaadin-avatar-group
  style="display:inline-block;width:auto;border:1px solid;"
  .items="${this.items.map((person) => {
    return {
      name: `${person.firstName} ${person.lastName}`,
    };
  })}"
></vaadin-avatar-group>   

    <!-- case 1 -->
    <!-- case 2 -->
    <div style="display:flex;width:100%">x
      <h1 style="flex-grow:1;background-color:green">Some text</h1>
      <vaadin-avatar-group
      style="flex-basis:150px;border:1px solid;"
      .items="${this.items.map((person) => {
        return {
          name: `${person.firstName} ${person.lastName}`,
        };
      })}"
      .maxItemsVisible="${4}"
    ></vaadin-avatar-group> 
    </div>    
    `;
  }
}
