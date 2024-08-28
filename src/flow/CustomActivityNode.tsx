import React, {useState} from 'react';
import {Handle, Position, NodeProps} from "@xyflow/react";
import {Button, IconButton, InputLabel, MenuItem, Select} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

type PropData = {
    label: string;
    activityType: string,
}
export type DropdownProps = NodeProps<CustomData> & {
    onButtonClick: (id: string) => void
}

function CustomActivityNode(props: NodeProps<PropData>) {
    let [selection, setSelection] = useState('');

    const onselectionchange = (e: any) => {
        setSelection(e.target.value);
        props.data.activityType = (e.target.value);
    }

    return (
        <>
            <div style={{backgroundColor:'darkgray', paddingLeft: '20px', paddingBottom: '20px', paddingRight: '5px'}}>
                <InputLabel style={{fontSize: '12px'}}>{`${props?.data.label}`}</InputLabel>
                <div style={{display: "flex", flexDirection:"row"}}>
                    <Select style={{padding: '0px', width: '250px', backgroundColor: 'white'}}
                            className="nodrag nopan"
                            id="activity-select"
                            value={selection}
                            label="Age"
                            onChange={onselectionchange}
                    >
                        <MenuItem style={{fontSize: '12px'}} value={'Build Docker Container'}>Build Docker Container</MenuItem>
                        <MenuItem style={{fontSize: '12px'}} value={'Push image to ECR'}>Push image to ECR</MenuItem>
                        <MenuItem style={{fontSize: '12px'}} value={'Deploy container to ECS'}>Deploy container to ECS</MenuItem>
                    </Select>
                    <IconButton onClick={() => props.data.onButtonClick(props.id)}>
                        <DeleteIcon style={{fontSize: '20px'}} />
                    </IconButton>
                </div>

                <Handle type="source" position={Position.Right}/>
                <Handle type="target" position={Position.Left}/>
            </div>
        </>
    );
}

export default CustomActivityNode;