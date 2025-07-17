
function get_name() {
    // return '1000';
    return '';
}

function Message() {
    // JSX: JavaScript XML
    const name = get_name();
    return <h1>I'm {name ? (name) : 'Jack'} years old.</h1>;
}

export default Message
