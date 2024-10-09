import React, { useState } from 'react';

const ParameterControls = ({ onParameterChange }) => {
    // 使用数组管理时间段和雨量的变化
    const [rainfallTimeline, setRainfallTimeline] = useState([{ time: 0, rainfall: 50 }]);
    const [newTime, setNewTime] = useState(0);
    const [newRainfall, setNewRainfall] = useState(50);

    // 处理时间点和雨量变化
    const handleTimelineChange = (index, field, value) => {
        const newTimeline = [...rainfallTimeline];
        newTimeline[index] = { ...newTimeline[index], [field]: parseInt(value, 10) };
        setRainfallTimeline(newTimeline);
        onParameterChange(newTimeline);
    };

    // 添加新的时间点和雨量
    const addTimePoint = () => {
        const newPoint = { time: parseInt(newTime, 10), rainfall: parseInt(newRainfall, 10) };
        const updatedTimeline = [...rainfallTimeline, newPoint].sort((a, b) => a.time - b.time);
        setRainfallTimeline(updatedTimeline);
        setNewTime(0);
        setNewRainfall(50);
        onParameterChange(updatedTimeline);
    };

    // 删除指定时间点
    const removeTimePoint = (index) => {
        const updatedTimeline = rainfallTimeline.filter((_, i) => i !== index);
        setRainfallTimeline(updatedTimeline);
        onParameterChange(updatedTimeline);
    };

    return (
        <div style={styles.container}>
            <h2>Adjust Model Parameters</h2>
            <div style={styles.timelineContainer}>
                {/* 渲染现有时间点和雨量设置 */}
                {rainfallTimeline.map((point, index) => (
                    <div key={index} style={styles.timelineControl}>
                        <label>
                            Time:
                            <input
                                type="number"
                                value={point.time}
                                onChange={(e) => handleTimelineChange(index, 'time', e.target.value)}
                                style={styles.input}
                            />
                        </label>
                        <label>
                            Rainfall:
                            <input
                                type="number"
                                value={point.rainfall}
                                onChange={(e) => handleTimelineChange(index, 'rainfall', e.target.value)}
                                style={styles.input}
                            />
                        </label>
                        <button onClick={() => removeTimePoint(index)} style={styles.removeButton}>Remove</button>
                    </div>
                ))}
            </div>

            {/* 添加新的时间段和雨量设置 */}
            <div style={styles.addControl}>
                <h3>Add New Time Point</h3>
                <label>
                    Time:
                    <input
                        type="number"
                        value={newTime}
                        onChange={(e) => setNewTime(e.target.value)}
                        style={styles.input}
                    />
                </label>
                <label>
                    Rainfall:
                    <input
                        type="number"
                        value={newRainfall}
                        onChange={(e) => setNewRainfall(e.target.value)}
                        style={styles.input}
                    />
                </label>
                <button onClick={addTimePoint} style={styles.addButton}>Add</button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        backgroundColor: '#f4f4f4',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    },
    timelineContainer: {
        marginBottom: '15px',
    },
    timelineControl: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px',
    },
    addControl: {
        marginTop: '20px',
    },
    input: {
        width: '60px',
        marginLeft: '5px',
        marginRight: '10px',
    },
    addButton: {
        padding: '5px 10px',
        backgroundColor: '#28a745',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    removeButton: {
        padding: '5px 10px',
        backgroundColor: '#dc3545',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginLeft: '10px',
    },
};

export default ParameterControls;
