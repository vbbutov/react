import React from "react"
class AddUser extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            age: '',
        }

    }
    render() {
        return (
            <form ref={(el) => this.myForm = el}>
                <input placeholder="Имя" onChange={(e) => this.setState({ name: e.target.value })} />
                <input placeholder="Возраст" onChange={(e) => this.setState({ age: e.target.value })} />
                {/* <input placeholder="" /> */}
                <button type="button" onClick={() => {
                    this.myForm.reset();
                    this.props.onAdd({
                        name: this.state.name,
                        age: this.state.age
                    })
                }}>Добавить</button>
            </form>
        )
    }
}
export default AddUser