import React from 'react';
import Proptypes from 'prop-types';
import { Tab, Loader } from 'semantic-ui-react';



import './tabList.scss';


class TabList extends React.Component {
  componentDidMount() {
    this.props.requestTabList();
  };

  render() {
    console.log(this.props);
    const { tabList, load } = this.props;

    const panes = [
      { menuItem: 'Les Tops et Flops de la semaine', render: () => 
      <Tab.Pane>
        <div className="tabContent">
          <div className="partOfOneTab">
            <div className="icone good"><i class="fas fa-thumbs-up"></i></div>
            <div>{tabList[0].name}</div>
            <div>{tabList[1].name}</div>
            <div>{tabList[2].name}</div>
            <div>{tabList[3].name}</div>
            <div>{tabList[4].name}</div>
            <div>{tabList[5].name}</div>
            <div>{tabList[6].name}</div>
            <div>{tabList[7].name}</div>
          </div>
          <div className="partOfOneTab">
            <div className="icone bad"><i class="fas fa-thumbs-down"></i></div>
            <div>{tabList[4].name}</div>
            <div>{tabList[5].name}</div>
            <div>{tabList[6].name}</div>
            <div>{tabList[7].name}</div>
            <div>{tabList[0].name}</div>
            <div>{tabList[1].name}</div>
            <div>{tabList[2].name}</div>
            <div>{tabList[3].name}</div>
          </div>
        </div>
      </Tab.Pane> },
      { menuItem: 'Les Tops et Flops du mois',
      render: () => 
      <Tab.Pane>
        <div className="tabContent">
          <div className="partOfOneTab">
            <div className="icone good"><i class="fas fa-thumbs-up"></i></div>
            <div>{tabList[0].name}</div>
            <div>{tabList[2].name}</div>
            <div>{tabList[1].name}</div>
            <div>{tabList[6].name}</div>
            <div>{tabList[7].name}</div>
            <div>{tabList[3].name}</div>
            <div>{tabList[4].name}</div>
            <div>{tabList[5].name}</div>
          </div>
          <div className="partOfOneTab">
            <div className="icone bad"><i class="fas fa-thumbs-down"></i></div>
            <div>{tabList[4].name}</div>
            <div>{tabList[5].name}</div>
            <div>{tabList[7].name}</div>
            <div>{tabList[0].name}</div>
            <div>{tabList[1].name}</div>
            <div>{tabList[6].name}</div>
            <div>{tabList[2].name}</div>
            <div>{tabList[3].name}</div>
          </div>
        </div>
      </Tab.Pane> },
      { menuItem: 'Les Tops et Flops de l\'année', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
    ]

    return (
      <div>
        {load && <Loader active inline='centered' />}
          {!load && (
            <div className="tab">
              <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
            </div>
          )}
      </div>
    );
  };
};

export default TabList;
