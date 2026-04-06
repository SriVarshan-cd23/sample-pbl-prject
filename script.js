// Initialize Lucide Icons
lucide.createIcons();

// Set current date
document.getElementById('current-date').textContent = new Date().toLocaleDateString('en-US', { 
  month: 'short', 
  day: 'numeric', 
  year: 'numeric' 
});

// Mock Tasks Data
const recentTasks = [
  { id: 1, title: 'Design Homepage', assigned_user: 'Alice Smith', status: 'in_progress', priority: 'high' },
  { id: 2, title: 'Setup Database', assigned_user: 'Bob Johnson', status: 'completed', priority: 'high' },
  { id: 3, title: 'Write API Documentation', assigned_user: 'Alice Smith', status: 'pending', priority: 'medium' },
  { id: 4, title: 'Implement User Authentication', assigned_user: 'Bob Johnson', status: 'in_progress', priority: 'high' }
];

// Populate Activity List
const activityList = document.getElementById('activity-list');

recentTasks.forEach(task => {
  let iconName = task.status === 'completed' ? 'check-circle-2' : 
                 task.status === 'in_progress' ? 'zap' : 'clock';

  const itemHtml = `
    <div class="activity-item">
      <div class="status-icon icon-${task.status}">
        <i data-lucide="${iconName}" width="18"></i>
      </div>
      <div class="activity-info">
        <h4>${task.title}</h4>
        <p>Assigned to ${task.assigned_user}</p>
      </div>
      <div class="activity-meta">
        <span class="badge-priority priority-${task.priority}">${task.priority}</span>
        <button class="icon-only-btn"><i data-lucide="more-vertical" width="16"></i></button>
      </div>
    </div>
  `;
  activityList.insertAdjacentHTML('beforeend', itemHtml);
});

// Mock Chart Data
const chartData = [60, 80, 45, 90, 70, 85, 65];
const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
const barChart = document.getElementById('bar-chart');

chartData.forEach((height, i) => {
  const barHtml = `
    <div class="bar-wrapper">
      <div class="bar-value" style="height: ${height}%;" title="${height}%"></div>
      <span class="bar-label">${days[i]}</span>
    </div>
  `;
  barChart.insertAdjacentHTML('beforeend', barHtml);
});

// Re-initialize icons for dynamically injected elements
lucide.createIcons();
