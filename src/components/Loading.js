function Loading(props) {
    
    return (
    <div>
      {(props.isLoading)
      ?
      <span className="loading"></span>
      :
      null}
    </div>
    );
  }
  
  export default Loading;
  