import * as React from "react";

export interface IAppProps {}

export default class Button extends React.Component<IAppProps> {
  public render() {
    return (
      <div>
        <button className="button-md">Scrape it!</button>
      </div>
    );
  }
}
