export const SearchBar = ({ filters: { level, topic }, onChangeFilter }) => {
  return <div>
    <input 
    type="text" 
    placeholder="Filter by topic..." 
    value={topic} 
    onChange={evt => {onChangeFilter("topic", evt.target.value)}}/>
    
    <select 
    value={level} 
    onChange={evt => {onChangeFilter("level", evt.target.value)}}>
        <option value="all">All</option>
        <option value="beginner">Berinner</option>
        <option value="intermediate">Intermediante</option>
        <option value="advanced">Anvanced</option>
    </select>
  </div>
}