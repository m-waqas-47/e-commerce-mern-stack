import Alert from 'react-bootstrap/Alert';

export default function MessageBox (props) {
    console.log('in alert');
  return <Alert variant={props.variant || "info"}>{props.children}</Alert>;
};

// export default MessageBox;