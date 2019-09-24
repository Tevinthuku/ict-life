import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'
import {Spring} from 'react-spring/renderProps.cjs'

const useStyles = makeStyles({
    root: {
        fontSize: 20
    },
});
export default ({text}) =>
{
    const classes = useStyles();
    return <Spring
        config={{tension: 1, friction: 0.5, precision: 0.1}}
        from={{ val: 0 }}
        to={{ val: text.length }}>
        {props => <Typography className={classes.root} variant="overline">{text.substring(0, props.val)}</Typography>}
    </Spring>
}

