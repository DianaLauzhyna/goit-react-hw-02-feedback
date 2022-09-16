import PropTypes from "prop-types";
import { List, ListItem } from "./Statistics.styled";

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <List
    satisfactionrate={
      (positivePercentage <= 33 && 'content: "😟"') ||
      (positivePercentage >= 66 && 'content: "😀"') ||
      'content:"😐"'
    }
  >
    <ListItem>Good: {good}</ListItem>
    <ListItem>Neutral: {neutral}</ListItem>
    <ListItem>Bad: {bad}</ListItem>
    <ListItem>Total: {total}</ListItem>
    <ListItem>Postive feedback: {positivePercentage}%</ListItem>
  </List>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

