import './style.css';
export default function Card() {
    return (
        <flex-box>
            <tr>
                <td>
                    <div class="card text-white bg-success mb-3" >
                        <div class="card-header">Card 1</div>
                        <div class="card-body">
                            <p class="card-text">This is the 1st button and has the success background color, which is green.</p>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="card text-dark bg-warning mb-3" >
                        <div class="card-header">Card 2</div>
                        <div class="card-body">                           
                            <p class="card-text">This is the 2nd button and has the warning background color, which is yellow.</p>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="card text-white bg-dark mb-3" >
                        <div class="card-header">Card 3</div>
                        <div class="card-body">                           
                            <p class="card-text">This is the 3rd button and has the dark background color.</p>
                        </div>
                    </div>
                </td>
            </tr>
        </flex-box>
    )
}

