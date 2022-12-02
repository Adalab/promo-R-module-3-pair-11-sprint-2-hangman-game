function Options(props) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  const handleColectValue =(ev)=>{
    props.handleColectWord(ev.target.value);
  }
  return (
    <section className="option">
      <form onSubmit={handleSubmit}>
  <label className="title" htmlFor="word">
    Escribe aquí la palabra que hay que adivinar:
  </label>
  <input
    autoFocus
    autoComplete="off"
    className="form__input"
    maxLength="15"
    type="text"
    id="word"
    name="word"
    value={props.word}
    onChange={handleColectValue}
  />
</form>
    </section>
  );
}

export default Options;
