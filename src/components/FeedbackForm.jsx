import { useState } from 'react'
import Card from "./shared/Card";

function FeedbackForm() {

    const [text, setText] = useState('')

    const handleTextChange = (e) => {
        setText(e.target.value)
    }

    return (
        <Card>
            <form>
                <h2>Como você avalia nosso serviço?</h2>
                {/* rating select component */}
                <div className="input-group">
                    <input onChange={handleTextChange} type="text" placeholder="Envie sua avaliação" value={text} />
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </Card>)
}

export default FeedbackForm;
