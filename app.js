// Workout Program Data
const PROGRAM = {
    1: {
        name: "Session 1",
        duration: "~55 min",
        exercises: [
            { id: "bench-press", name: "Barbell Bench Press", block: "A", sets: 4, reps: "8-10", rest: "2 min", priority: true, equipment: "Bench + Barbell" },
            { id: "pullups", name: "Pull-ups (Neutral grip)", block: "B", sets: 4, reps: "6-10", rest: "90s", priority: true, equipment: "Pull-up station" },
            {
                superset: true,
                label: "Superset C",
                exercises: [
                    { id: "db-ohp", name: "Dumbbell Overhead Press", block: "C1", sets: 3, reps: "8-10", rest: "60s" },
                    { id: "db-rdl", name: "Dumbbell Romanian Deadlift", block: "C2", sets: 3, reps: "10-12", rest: "60s" }
                ],
                equipment: "Dumbbells"
            },
            {
                superset: true,
                label: "Superset D",
                exercises: [
                    { id: "lat-raises", name: "Dumbbell Lateral Raises", block: "D1", sets: 3, reps: "12-15", rest: "45s" },
                    { id: "bicep-curls", name: "Dumbbell Bicep Curls", block: "D2", sets: 3, reps: "12-15", rest: "45s" }
                ],
                equipment: "Dumbbells"
            },
            {
                superset: true,
                label: "Superset E",
                exercises: [
                    { id: "face-pulls", name: "Cable Face Pulls", block: "E1", sets: 3, reps: "12-15", rest: "60s" },
                    { id: "tricep-pushdowns", name: "Cable Tricep Pushdowns", block: "E2", sets: 3, reps: "12-15", rest: "60s" },
                    { id: "single-arm-pulldown", name: "Cable Single Arm Lat Pulldown", block: "E3", sets: 3, reps: "10-12 (each arm)", rest: "60s" }
                ],
                equipment: "Cable station"
            }
        ]
    },
    2: {
        name: "Session 2",
        duration: "~51 min",
        exercises: [
            {
                superset: true,
                label: "Superset A",
                priority: true,
                exercises: [
                    { id: "deadlift", name: "Deadlift (Barbell)", block: "A1", sets: 4, reps: "6-8", rest: "90s" },
                    { id: "chinups", name: "Chin-ups (Underhand grip)", block: "A2", sets: 3, reps: "6-10", rest: "90s" }
                ],
                equipment: "Rack / Floor + Rack pull-up bar"
            },
            {
                superset: true,
                label: "Superset B",
                exercises: [
                    { id: "db-row", name: "Dumbbell Single Arm Row", block: "B1", sets: 4, reps: "10-12 (each arm)", rest: "60s" },
                    { id: "bulgarian-split", name: "Dumbbell Bulgarian Split Squat", block: "B2", sets: 3, reps: "10-12 (each leg)", rest: "60s", priority: true }
                ],
                equipment: "Dumbbell + Bench"
            },
            {
                superset: true,
                label: "Superset C",
                exercises: [
                    { id: "reverse-flyes", name: "Dumbbell Reverse Flyes", block: "C1", sets: 3, reps: "12-15", rest: "45s" },
                    { id: "calf-raises", name: "Dumbbell Single Leg Calf Raise", block: "C2", sets: 3, reps: "12-15 (each leg)", rest: "45s" },
                    { id: "russian-twists", name: "Russian Twists (with plate)", block: "C3", sets: 3, reps: "15-20 (each side)", rest: "45s" }
                ],
                equipment: "Dumbbells + Plate"
            },
            {
                superset: true,
                label: "Superset D",
                exercises: [
                    { id: "cable-row", name: "Wide Grip Seated Cable Row", block: "D1", sets: 3, reps: "10-12", rest: "60s" },
                    { id: "face-pulls-2", name: "Cable Face Pulls", block: "D2", sets: 3, reps: "12-15", rest: "60s" }
                ],
                equipment: "Cable station"
            }
        ]
    },
    3: {
        name: "Session 3",
        duration: "~57 min",
        exercises: [
            { id: "back-squat", name: "Barbell Back Squat", block: "A", sets: 4, reps: "6-8", rest: "2.5 min", priority: true, equipment: "Squat rack" },
            {
                superset: true,
                label: "Superset B",
                priority: true,
                exercises: [
                    { id: "pullups-3", name: "Pull-ups (Neutral grip)", block: "B1", sets: 4, reps: "6-10", rest: "60s" },
                    { id: "dips", name: "Dips (Slight lean forward)", block: "B2", sets: 4, reps: "8-12", rest: "90s" }
                ],
                equipment: "Pull-up / Dip station"
            },
            {
                superset: true,
                label: "Superset C",
                exercises: [
                    { id: "single-arm-chest", name: "Dumbbell Single Arm Chest Press", block: "C1", sets: 4, reps: "10-12 (each arm)", rest: "60s" },
                    { id: "pistol-squat", name: "Pistol Squat / Curtsy Lunge", block: "C2", sets: 3, reps: "8-12 (each leg)", rest: "60s", rotating: true }
                ],
                equipment: "Dumbbell + Bench"
            },
            { id: "hip-thrust", name: "Barbell Hip Thrust", block: "D", sets: 3, reps: "8-10", rest: "90s", priority: true, equipment: "Barbell + Bench" },
            {
                superset: true,
                label: "Superset E",
                exercises: [
                    { id: "hammer-curls", name: "Dumbbell Hammer Curls", block: "E1", sets: 3, reps: "12-15", rest: "45s" },
                    { id: "leg-raises", name: "Bench Leg Raises", block: "E2", sets: 3, reps: "12-15", rest: "45s" }
                ],
                equipment: "Dumbbells + Bench"
            }
        ]
    }
};

// App State
let state = {
    currentScreen: 'home',
    previousScreen: 'home',
    currentSession: null,
    currentWorkout: null,
    workoutStartTime: null,
    timerInterval: null,
    selectedWorkoutId: null,
    selectedExerciseId: null
};

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    loadLastWorkoutDates();
    renderHistory();
});

// Storage helpers
function getWorkouts() {
    const data = localStorage.getItem('workouts');
    return data ? JSON.parse(data) : [];
}

function saveWorkouts(workouts) {
    localStorage.setItem('workouts', JSON.stringify(workouts));
}

function getLastWorkoutForExercise(exerciseId) {
    const workouts = getWorkouts();
    for (let i = workouts.length - 1; i >= 0; i--) {
        const workout = workouts[i];
        if (workout.exercises && workout.exercises[exerciseId]) {
            return workout.exercises[exerciseId];
        }
    }
    return null;
}

// Screen navigation
function showScreen(screenName) {
    state.previousScreen = state.currentScreen;
    state.currentScreen = screenName;

    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(`${screenName}-screen`).classList.add('active');

    // Update nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    const activeNav = document.querySelector(`.nav-btn[onclick="showScreen('${screenName}')"]`);
    if (activeNav) activeNav.classList.add('active');

    if (screenName === 'home') {
        loadLastWorkoutDates();
    } else if (screenName === 'history') {
        renderHistory();
    }
}

// Load last workout dates
function loadLastWorkoutDates() {
    const workouts = getWorkouts();

    [1, 2, 3].forEach(session => {
        const lastWorkout = workouts.filter(w => w.session === session).pop();
        const el = document.getElementById(`last-session-${session}`);
        if (lastWorkout) {
            el.textContent = formatDate(new Date(lastWorkout.date));
        } else {
            el.textContent = 'Never';
        }
    });
}

// Start workout
function startWorkout(sessionNum) {
    state.currentSession = sessionNum;
    state.currentWorkout = { session: sessionNum, exercises: {} };
    state.workoutStartTime = Date.now();

    document.getElementById('workout-session-title').textContent = `Session ${sessionNum}`;

    renderExercises(sessionNum);
    showScreen('workout');
    startTimer();
}

// Render exercises for workout
function renderExercises(sessionNum) {
    const container = document.getElementById('exercises-container');
    const session = PROGRAM[sessionNum];

    let html = '';

    session.exercises.forEach(item => {
        if (item.superset) {
            html += renderSuperset(item);
        } else {
            html += renderSingleExercise(item);
        }
    });

    container.innerHTML = html;
}

function renderSingleExercise(exercise) {
    const lastData = getLastWorkoutForExercise(exercise.id);
    const priorityTag = exercise.priority ? `<span class="priority-tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>Priority</span>` : '';

    return `
        <div class="exercise-block ${exercise.priority ? 'priority' : ''}">
            <div class="block-label">Block ${exercise.block}</div>
            <div class="exercise-name" onclick="showExerciseProgress('${exercise.id}')">${exercise.name} ${priorityTag}</div>
            <div class="exercise-target">${exercise.sets} × ${exercise.reps} · Rest ${exercise.rest}</div>
            ${lastData ? `<div class="exercise-last">Last: <strong>${formatLastSets(lastData)}</strong></div>` : ''}
            <div class="sets-container">
                ${renderSetInputs(exercise.id, exercise.sets, lastData)}
            </div>
        </div>
    `;
}

function renderSuperset(superset) {
    const priorityTag = superset.priority ? `<span class="priority-tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>Priority</span>` : '';

    let exercisesHtml = superset.exercises.map(exercise => {
        const lastData = getLastWorkoutForExercise(exercise.id);
        const exPriorityTag = exercise.priority ? `<span class="priority-tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>Priority</span>` : '';

        return `
            <div class="superset-exercise">
                <div class="block-label">${exercise.block}</div>
                <div class="exercise-name" onclick="showExerciseProgress('${exercise.id}')">${exercise.name} ${exPriorityTag}</div>
                <div class="exercise-target">${exercise.sets} × ${exercise.reps} · Rest ${exercise.rest}</div>
                ${lastData ? `<div class="exercise-last">Last: <strong>${formatLastSets(lastData)}</strong></div>` : ''}
                <div class="sets-container">
                    ${renderSetInputs(exercise.id, exercise.sets, lastData)}
                </div>
            </div>
        `;
    }).join('');

    return `
        <div class="exercise-block superset ${superset.priority ? 'priority' : ''}">
            <div class="superset-label">${superset.label} ${priorityTag}</div>
            <div class="superset-exercises">
                ${exercisesHtml}
            </div>
        </div>
    `;
}

function renderSetInputs(exerciseId, numSets, lastData) {
    let html = '';
    for (let i = 1; i <= numSets; i++) {
        const lastWeight = lastData && lastData.sets[i-1] ? lastData.sets[i-1].weight : '';
        const lastReps = lastData && lastData.sets[i-1] ? lastData.sets[i-1].reps : '';

        html += `
            <div class="set-row">
                <span class="set-number">Set ${i}</span>
                <div class="set-inputs">
                    <input type="number" class="set-input" id="${exerciseId}-set${i}-weight"
                           placeholder="${lastWeight || 'kg'}" inputmode="decimal" step="0.5"
                           onchange="updateSet('${exerciseId}', ${i})">
                    <span class="input-label">kg</span>
                    <span style="color: var(--text-muted);">×</span>
                    <input type="number" class="set-input" id="${exerciseId}-set${i}-reps"
                           placeholder="${lastReps || 'reps'}" inputmode="numeric"
                           onchange="updateSet('${exerciseId}', ${i})">
                    <span class="input-label">reps</span>
                </div>
                <div class="set-check" id="${exerciseId}-set${i}-check" onclick="toggleSetCheck('${exerciseId}', ${i})">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
            </div>
        `;
    }
    return html;
}

function updateSet(exerciseId, setNum) {
    const weight = document.getElementById(`${exerciseId}-set${setNum}-weight`).value;
    const reps = document.getElementById(`${exerciseId}-set${setNum}-reps`).value;

    if (!state.currentWorkout.exercises[exerciseId]) {
        state.currentWorkout.exercises[exerciseId] = { sets: [] };
    }

    state.currentWorkout.exercises[exerciseId].sets[setNum - 1] = {
        weight: parseFloat(weight) || 0,
        reps: parseInt(reps) || 0
    };
}

function toggleSetCheck(exerciseId, setNum) {
    const check = document.getElementById(`${exerciseId}-set${setNum}-check`);
    check.classList.toggle('checked');
    updateSet(exerciseId, setNum);
}

// Timer
function startTimer() {
    updateTimer();
    state.timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
    if (state.timerInterval) {
        clearInterval(state.timerInterval);
        state.timerInterval = null;
    }
}

function updateTimer() {
    const elapsed = Math.floor((Date.now() - state.workoutStartTime) / 1000);
    const mins = Math.floor(elapsed / 60);
    const secs = elapsed % 60;
    document.getElementById('workout-timer').textContent =
        `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Finish workout
function finishWorkout() {
    stopTimer();

    const duration = Math.floor((Date.now() - state.workoutStartTime) / 1000);
    const workout = {
        id: Date.now().toString(),
        date: new Date().toISOString(),
        session: state.currentSession,
        duration: duration,
        exercises: state.currentWorkout.exercises
    };

    // Count completed sets
    let totalSets = 0;
    Object.values(workout.exercises).forEach(ex => {
        totalSets += ex.sets.filter(s => s.weight > 0 || s.reps > 0).length;
    });
    workout.totalSets = totalSets;

    const workouts = getWorkouts();
    workouts.push(workout);
    saveWorkouts(workouts);

    showToast('Workout saved!');
    showScreen('home');

    state.currentWorkout = null;
    state.currentSession = null;
    state.workoutStartTime = null;
}

function confirmExitWorkout() {
    showModal(
        'Exit Workout?',
        'Your progress will be lost if you exit now.',
        () => {
            stopTimer();
            state.currentWorkout = null;
            state.currentSession = null;
            showScreen('home');
        }
    );
}

// History
function renderHistory() {
    const container = document.getElementById('history-list');
    const workouts = getWorkouts().reverse();

    if (workouts.length === 0) {
        container.innerHTML = `
            <div class="history-empty">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <p>No workouts yet</p>
                <p>Start your first workout from the home screen!</p>
            </div>
        `;
        return;
    }

    let html = '';
    let currentMonth = '';

    workouts.forEach(workout => {
        const date = new Date(workout.date);
        const month = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

        if (month !== currentMonth) {
            if (currentMonth !== '') html += '</div>';
            html += `<div class="history-month"><h3 style="color: var(--text-muted); font-size: 0.8rem; margin: 16px 0 8px; text-transform: uppercase;">${month}</h3>`;
            currentMonth = month;
        }

        html += `
            <div class="history-item" onclick="showWorkoutDetail('${workout.id}')">
                <div class="history-header">
                    <span class="history-session">Session ${workout.session}</span>
                    <span class="history-date">${formatDate(date)}</span>
                </div>
                <div class="history-stats">
                    <span>${formatDuration(workout.duration)}</span>
                    <span>${workout.totalSets || 0} sets</span>
                </div>
            </div>
        `;
    });

    html += '</div>';
    container.innerHTML = html;
}

function showWorkoutDetail(workoutId) {
    const workouts = getWorkouts();
    const workout = workouts.find(w => w.id === workoutId);
    if (!workout) return;

    state.selectedWorkoutId = workoutId;

    document.getElementById('detail-session-title').textContent = `Session ${workout.session}`;
    document.getElementById('detail-date').textContent = formatDate(new Date(workout.date));

    const container = document.getElementById('workout-detail-content');
    const session = PROGRAM[workout.session];

    let html = `
        <div class="detail-stats">
            <div class="detail-stat">
                <div class="detail-stat-value">${formatDuration(workout.duration)}</div>
                <div class="detail-stat-label">Duration</div>
            </div>
            <div class="detail-stat">
                <div class="detail-stat-value">${workout.totalSets || 0}</div>
                <div class="detail-stat-label">Sets</div>
            </div>
        </div>
    `;

    // Flatten exercises from session
    const allExercises = [];
    session.exercises.forEach(item => {
        if (item.superset) {
            item.exercises.forEach(ex => allExercises.push(ex));
        } else {
            allExercises.push(item);
        }
    });

    allExercises.forEach(exercise => {
        const data = workout.exercises[exercise.id];
        if (data && data.sets.some(s => s.weight > 0 || s.reps > 0)) {
            html += `
                <div class="detail-exercise">
                    <div class="detail-exercise-name" onclick="showExerciseProgress('${exercise.id}')">${exercise.name}</div>
                    <div class="detail-sets">
                        ${data.sets.filter(s => s.weight > 0 || s.reps > 0).map(s =>
                            `<span class="detail-set">${s.weight}kg × ${s.reps}</span>`
                        ).join('')}
                    </div>
                </div>
            `;
        }
    });

    container.innerHTML = html;
    showScreen('workout-detail');
}

function deleteWorkout() {
    showModal(
        'Delete Workout?',
        'This workout will be permanently deleted.',
        () => {
            let workouts = getWorkouts();
            workouts = workouts.filter(w => w.id !== state.selectedWorkoutId);
            saveWorkouts(workouts);
            showToast('Workout deleted');
            showScreen('history');
        },
        true
    );
}

// Exercise Progress
function showExerciseProgress(exerciseId) {
    state.selectedExerciseId = exerciseId;

    // Find exercise name
    let exerciseName = exerciseId;
    Object.values(PROGRAM).forEach(session => {
        session.exercises.forEach(item => {
            if (item.superset) {
                item.exercises.forEach(ex => {
                    if (ex.id === exerciseId) exerciseName = ex.name;
                });
            } else if (item.id === exerciseId) {
                exerciseName = item.name;
            }
        });
    });

    document.getElementById('progress-exercise-title').textContent = exerciseName;

    const container = document.getElementById('progress-content');
    const workouts = getWorkouts();
    const exerciseData = [];

    workouts.forEach(workout => {
        if (workout.exercises[exerciseId]) {
            const sets = workout.exercises[exerciseId].sets.filter(s => s.weight > 0);
            if (sets.length > 0) {
                const maxWeight = Math.max(...sets.map(s => s.weight));
                exerciseData.push({
                    date: new Date(workout.date),
                    sets: sets,
                    maxWeight: maxWeight
                });
            }
        }
    });

    if (exerciseData.length === 0) {
        container.innerHTML = `
            <div class="progress-empty">
                <p>No data for this exercise yet</p>
                <p>Complete a workout to see your progress!</p>
            </div>
        `;
        showScreen('progress');
        return;
    }

    // Personal best
    const pb = Math.max(...exerciseData.map(d => d.maxWeight));
    const pbEntry = exerciseData.find(d => d.maxWeight === pb);
    const pbReps = pbEntry ? Math.max(...pbEntry.sets.filter(s => s.weight === pb).map(s => s.reps)) : 0;

    // Chart (last 8 workouts)
    const chartData = exerciseData.slice(-8);
    const maxChartWeight = Math.max(...chartData.map(d => d.maxWeight));

    let chartHtml = chartData.map(d => {
        const height = (d.maxWeight / maxChartWeight) * 140;
        const dateLabel = d.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        return `
            <div class="chart-bar" style="height: ${height}px;">
                <span class="chart-bar-value">${d.maxWeight}</span>
                <span class="chart-bar-label">${dateLabel}</span>
            </div>
        `;
    }).join('');

    // History list
    const historyHtml = exerciseData.slice().reverse().slice(0, 10).map(d => `
        <div class="progress-entry">
            <span class="progress-entry-date">${formatDate(d.date)}</span>
            <span class="progress-entry-sets">${d.sets.map(s => `${s.weight}×${s.reps}`).join(', ')}</span>
        </div>
    `).join('');

    container.innerHTML = `
        <div class="progress-pb">
            <div class="progress-pb-label">Personal Best</div>
            <div class="progress-pb-value">${pb}kg × ${pbReps}</div>
        </div>
        <div class="progress-chart" style="padding-bottom: 30px;">
            ${chartHtml}
        </div>
        <div class="progress-history">
            <div class="progress-history-title">Recent History</div>
            ${historyHtml}
        </div>
    `;

    showScreen('progress');
}

function goBackFromProgress() {
    if (state.previousScreen === 'workout-detail') {
        showScreen('workout-detail');
    } else if (state.previousScreen === 'workout') {
        showScreen('workout');
    } else {
        showScreen('history');
    }
}

// Data export/import
function exportData() {
    const workouts = getWorkouts();
    const data = {
        version: 1,
        exportDate: new Date().toISOString(),
        workouts: workouts
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `gym-tracker-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);

    showToast('Data exported!');
}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            if (data.workouts && Array.isArray(data.workouts)) {
                showModal(
                    'Import Data?',
                    `This will replace your current data with ${data.workouts.length} workouts from the backup.`,
                    () => {
                        saveWorkouts(data.workouts);
                        loadLastWorkoutDates();
                        renderHistory();
                        showToast('Data imported!');
                    }
                );
            } else {
                showToast('Invalid backup file');
            }
        } catch (err) {
            showToast('Error reading file');
        }
    };
    reader.readAsText(file);
    event.target.value = '';
}

function clearAllData() {
    showModal(
        'Clear All Data?',
        'This will permanently delete all your workout history. This cannot be undone.',
        () => {
            localStorage.removeItem('workouts');
            loadLastWorkoutDates();
            renderHistory();
            showToast('All data cleared');
        },
        true
    );
}

// Modal
function showModal(title, message, onConfirm, isDanger = false) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-message').textContent = message;

    const confirmBtn = document.getElementById('modal-confirm');
    confirmBtn.className = 'modal-btn confirm' + (isDanger ? ' danger' : '');
    confirmBtn.onclick = () => {
        closeModal();
        onConfirm();
    };

    document.getElementById('modal').classList.add('active');
}

function closeModal() {
    document.getElementById('modal').classList.remove('active');
}

// Toast
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('active');

    setTimeout(() => {
        toast.classList.remove('active');
    }, 2500);
}

// Helpers
function formatDate(date) {
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: date.getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined
    });
}

function formatDuration(seconds) {
    const mins = Math.floor(seconds / 60);
    return `${mins} min`;
}

function formatLastSets(data) {
    if (!data || !data.sets) return '';
    const validSets = data.sets.filter(s => s.weight > 0);
    if (validSets.length === 0) return '';

    const weight = validSets[0].weight;
    const reps = validSets.map(s => s.reps).join(', ');
    return `${weight}kg × ${reps}`;
}
