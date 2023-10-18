import { DatePicker, Space } from "antd";

const { RangePicker } = DatePicker;

function EventDatePicker(props) {
  return (
    <RangePicker
      onChange={(value) => props.setDataRange(value)}
      className="EventDatePicker"
    />
  );
}

export default EventDatePicker;
