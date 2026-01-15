import React from 'react';
import { Tab, Tabs } from '@mui/material';
import _ from 'lodash';
import PageTitle from './PageTitle';


class SimpleTabs extends React.Component {
  render() {
    const { selectedTab, handleChangeTab, tabsInfo } = this.props;
    const pageTitle = tabsInfo 
                      ? _.get(tabsInfo.filter(tb => tb.value === selectedTab), ['0', 'pageTitle'])
                        ? _.get(tabsInfo.filter(tb => tb.value === selectedTab), ['0', 'pageTitle'])
                        : _.get(tabsInfo.filter(tb => tb.value === selectedTab), ['0', 'label'])
                      : '';
    return <React.Fragment>
      <Tabs
        classes={{root: 'tabsRoot', flexContainer: 'tabLabelIcon'}}
        scrollButtons="auto"
        variant="scrollable"
        value={selectedTab}
        onChange={handleChangeTab}
        >
        {tabsInfo && tabsInfo.map(tab => <Tab key={tab.label}
          classes={{root: 'tabRoot', selected: 'tabSelected' }}
          label={tab.label} value={tab.value} />)}
      </Tabs>
      {tabsInfo && tabsInfo.map(tab => tab.value === selectedTab 
        && <React.Fragment key={`tab-content-${tab.value}`}>
          <PageTitle styleParam={{backgroundColor: '#c4d5dc', color: '#0c540c'}} pageTitle={pageTitle} />
          {tab.component}
        </React.Fragment>
      )}
    </React.Fragment>
  }
}

export default SimpleTabs;
