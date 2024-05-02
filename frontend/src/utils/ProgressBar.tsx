
import { ProgressBarProps } from "../interfaces/ProgressBarProps"

const ProgressBar = ({value, maxValue, color}: ProgressBarProps) => {
    const fillPercentage = Math.min(value/ maxValue * 100, 100)

   

    const barStyle = {
        width: `${fillPercentage}%`,
        backgroundColor: color

    }

    return (
        <div className="progress-bar-container">
            
            <div className="progress-bar" style={barStyle}>
                <span className="progress-bar-value">{value}/{maxValue}</span>
            </div>

        </div>
    )

}

export default ProgressBar;