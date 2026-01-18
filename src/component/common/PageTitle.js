
function PageTitle(props) {
  const { styleParam } = props;
  return <div className="pageTitle" style={{...styleParam}}>{props.pageTitle}</div>
}

export default PageTitle;
