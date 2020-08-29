import React from 'react';
import { Tab, Tabs, withStyles } from '@material-ui/core';
import _ from 'lodash';
import PageTitle from './PageTitle';

const styles = () => ({
  tabsRoot: {
    backgroundColor: '#fff',
    color: 'white',
  },
  tabLabelIcon: {
    overflow: 'auto',
    borderBottom: '20px solid #597d8c',
    borderRight: '10px solid transparent',
    borderLeft: '10px solid transparent',
  },
  tabRoot: {
    borderRadius: '0px 20px 0px 0px',
    backgroundColor: '#6e8194',
    borderRight: '1px solid #fff',
    color: 'white',
  },
  tabSelected: {
    backgroundColor: '#597d8c',
  }
});

class SimpleTabs extends React.Component {
  render() {
    const { selectedTab, handleChangeTab, tabsInfo, classes } = this.props;
    const pageTitle = tabsInfo 
                      ? _.get(tabsInfo.filter(tb => tb.value === selectedTab), ['0', 'pageTitle'])
                        ? _.get(tabsInfo.filter(tb => tb.value === selectedTab), ['0', 'pageTitle'])
                        : _.get(tabsInfo.filter(tb => tb.value === selectedTab), ['0', 'label'])
                      : '';
    return <React.Fragment>
      <Tabs
        classes={{root: classes.tabsRoot, flexContainer: classes.tabLabelIcon}}
        scrollButtons="auto"
        variant="scrollable"
        value={selectedTab}
        onChange={handleChangeTab}
        >
        {tabsInfo && tabsInfo.map(tab => <Tab key={tab.label}
          classes={{root: classes.tabRoot, selected: classes.tabSelected }}
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

export default withStyles(styles)(SimpleTabs);
