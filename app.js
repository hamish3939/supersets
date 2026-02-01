// Workout Program Data
const PROGRAM = {
    1: {
        name: "Push & Pull",
        duration: "~55 min",
        flow: ["Bench", "Pull-up station", "Dumbbell area", "Cable station"],
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
        name: "Deadlift & Back",
        duration: "~51 min",
        flow: ["Rack (deadlift + chin-ups)", "Dumbbell area + bench", "Cable station"],
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
        name: "Squat & Dips",
        duration: "~57 min",
        flow: ["Squat rack", "Pull-up / Dip station", "Dumbbell area + bench"],
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
    selectedExerciseId: null,
    currentExerciseReps: {} // Store target reps for each exercise
};


// Helper to get default reps from exercise plan (takes first number from range like "8-10")
function getDefaultReps(repsString) {
    const match = repsString.match(/(\d+)/);
    return match ? parseInt(match[1]) : 10;
}

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

    const session = PROGRAM[sessionNum];
    document.getElementById('workout-session-title').textContent = session.name;

    renderExercises(sessionNum);
    showScreen('workout');
    startTimer();
}

// Render exercises for workout
function renderExercises(sessionNum) {
    const container = document.getElementById('exercises-container');
    const session = PROGRAM[sessionNum];

    let html = '';

    // Add flow section at the top
    if (session.flow) {
        html += `
            <div class="flow-section">
                <div class="flow-label">Flow</div>
                <div class="flow-path">
                    ${session.flow.map((step, i) =>
                        `<span class="flow-step">${step}</span>${i < session.flow.length - 1 ? '<span class="flow-arrow">→</span>' : ''}`
                    ).join('')}
                </div>
            </div>
        `;
    }

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
                ${renderSetInputs(exercise.id, exercise.sets, lastData, exercise.reps)}
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
                    ${renderSetInputs(exercise.id, exercise.sets, lastData, exercise.reps)}
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

function renderSetInputs(exerciseId, numSets, lastData, targetReps) {
    const defaultReps = getDefaultReps(targetReps);

    // Store exercise info for adding sets later
    if (!state.exerciseInfo) state.exerciseInfo = {};
    state.exerciseInfo[exerciseId] = { numSets, lastData, targetReps, defaultReps };

    let html = `<div class="sets-list" id="${exerciseId}-sets">`;

    for (let i = 1; i <= numSets; i++) {
        html += renderSingleSet(exerciseId, i, lastData, defaultReps);
    }

    html += '</div>';
    html += `<button class="add-set-btn" id="${exerciseId}-add-set" style="display: none;" onclick="addSet('${exerciseId}')">+ Add Set</button>`;

    return html;
}

function renderSingleSet(exerciseId, setNum, lastData, defaultReps) {
    const lastWeight = lastData && lastData.sets[setNum-1] ? lastData.sets[setNum-1].weight : null;
    const repsValue = defaultReps;

    // Store last weight for this set so weight picker can access it
    if (!state.lastWeights) state.lastWeights = {};
    state.lastWeights[`${exerciseId}-${setNum}`] = lastWeight;

    return `
        <div class="set-row" id="${exerciseId}-set${setNum}-row">
            <span class="set-number">Set ${setNum}</span>
            <div class="set-inputs">
                <div class="weight-input-wrapper" onclick="openWeightPicker('${exerciseId}', ${setNum}, ${lastWeight || 20})">
                    <input type="text" class="set-input weight-display" id="${exerciseId}-set${setNum}-weight"
                           value="" placeholder="—" readonly>
                    <span class="input-label">kg</span>
                </div>
                <span style="color: var(--text-muted);">×</span>
                <div class="reps-input-wrapper" onclick="openRepsPicker('${exerciseId}', ${setNum}, ${repsValue})">
                    <input type="text" class="set-input reps-display" id="${exerciseId}-set${setNum}-reps"
                           value="${repsValue}" readonly>
                    <span class="input-label">reps</span>
                </div>
            </div>
            <button class="set-remove" onclick="removeSet('${exerciseId}', ${setNum})">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
        </div>
    `;
}

function useLastWeight(exerciseId, setNum, weight) {
    const input = document.getElementById(`${exerciseId}-set${setNum}-weight`);
    input.value = weight;
    updateSet(exerciseId, setNum);
    markSetComplete(exerciseId, setNum);
}

function markSetComplete(exerciseId, setNum) {
    const row = document.getElementById(`${exerciseId}-set${setNum}-row`);
    if (row) {
        row.classList.add('completed');
    }
}

function removeSet(exerciseId, setNum) {
    const row = document.getElementById(`${exerciseId}-set${setNum}-row`);
    if (row) {
        row.remove();

        // Remove from workout data
        if (state.currentWorkout.exercises[exerciseId]) {
            state.currentWorkout.exercises[exerciseId].sets[setNum - 1] = null;
        }

        // Show add set button
        const addBtn = document.getElementById(`${exerciseId}-add-set`);
        if (addBtn) addBtn.style.display = 'block';

        // Renumber remaining sets
        renumberSets(exerciseId);
    }
}

function renumberSets(exerciseId) {
    const container = document.getElementById(`${exerciseId}-sets`);
    const rows = container.querySelectorAll('.set-row');
    rows.forEach((row, index) => {
        const setNumEl = row.querySelector('.set-number');
        if (setNumEl) {
            setNumEl.textContent = `Set ${index + 1}`;
        }
    });
}

function addSet(exerciseId) {
    const info = state.exerciseInfo[exerciseId];
    if (!info) return;

    const container = document.getElementById(`${exerciseId}-sets`);
    const currentSets = container.querySelectorAll('.set-row').length;
    const newSetNum = currentSets + 1;

    const newSetHtml = renderSingleSet(exerciseId, newSetNum, info.lastData, info.defaultReps);
    container.insertAdjacentHTML('beforeend', newSetHtml);

    // Hide add button if we're back to original count
    if (newSetNum >= info.numSets) {
        const addBtn = document.getElementById(`${exerciseId}-add-set`);
        if (addBtn) addBtn.style.display = 'none';
    }
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

// Weight Picker
let weightPickerState = {
    exerciseId: null,
    setNum: null,
    currentWeight: 0
};

function openWeightPicker(exerciseId, setNum, lastWeight) {
    const currentInput = document.getElementById(`${exerciseId}-set${setNum}-weight`);
    const currentVal = currentInput.value ? parseFloat(currentInput.value) : (lastWeight || 20);

    weightPickerState = { exerciseId, setNum, currentWeight: currentVal, lastWeight: lastWeight };

    const picker = document.getElementById('weight-picker');
    const display = document.getElementById('weight-picker-value');
    display.textContent = weightPickerState.currentWeight;

    // Show/hide last weight button
    const lastBtn = document.getElementById('weight-picker-last-btn');
    if (lastWeight && lastWeight > 0) {
        lastBtn.style.display = 'block';
        lastBtn.textContent = `Last: ${lastWeight}kg`;
    } else {
        lastBtn.style.display = 'none';
    }

    picker.classList.add('active');
}

function closeWeightPicker() {
    document.getElementById('weight-picker').classList.remove('active');
}

function confirmWeightPicker() {
    const { exerciseId, setNum, currentWeight } = weightPickerState;
    const input = document.getElementById(`${exerciseId}-set${setNum}-weight`);
    input.value = currentWeight;
    updateSet(exerciseId, setNum);
    markSetComplete(exerciseId, setNum);
    closeWeightPicker();
}

function adjustWeight(delta) {
    weightPickerState.currentWeight = Math.max(0, weightPickerState.currentWeight + delta);
    document.getElementById('weight-picker-value').textContent = weightPickerState.currentWeight;
}

function selectWeightFromWheel(weight) {
    weightPickerState.currentWeight = weight;
    document.getElementById('weight-picker-value').textContent = weight;
}

function useLastWeightFromPicker() {
    if (weightPickerState.lastWeight) {
        weightPickerState.currentWeight = weightPickerState.lastWeight;
        document.getElementById('weight-picker-value').textContent = weightPickerState.lastWeight;
    }
}

// Reps Picker
let repsPickerState = {
    exerciseId: null,
    setNum: null,
    currentReps: 10
};

function openRepsPicker(exerciseId, setNum, currentReps) {
    const currentInput = document.getElementById(`${exerciseId}-set${setNum}-reps`);
    const currentVal = currentInput.value ? parseInt(currentInput.value) : currentReps;

    repsPickerState = { exerciseId, setNum, currentReps: currentVal };

    const picker = document.getElementById('reps-picker');
    const display = document.getElementById('reps-picker-value');
    display.textContent = repsPickerState.currentReps;

    picker.classList.add('active');
}

function closeRepsPicker() {
    document.getElementById('reps-picker').classList.remove('active');
}

function confirmRepsPicker() {
    const { exerciseId, setNum, currentReps } = repsPickerState;
    const input = document.getElementById(`${exerciseId}-set${setNum}-reps`);
    input.value = currentReps;
    updateSet(exerciseId, setNum);
    closeRepsPicker();
}

function adjustReps(delta) {
    repsPickerState.currentReps = Math.max(1, repsPickerState.currentReps + delta);
    document.getElementById('reps-picker-value').textContent = repsPickerState.currentReps;
}

function selectRepsFromPicker(reps) {
    repsPickerState.currentReps = reps;
    document.getElementById('reps-picker-value').textContent = reps;
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
    const elapsed = Math.floor((Date.now() - state.workoutStartTime) / 1000);
    const mins = Math.floor(elapsed / 60);
    const secs = elapsed % 60;
    const timeStr = `${mins}:${secs.toString().padStart(2, '0')}`;

    showModal(
        'Finish Workout?',
        `You've been working out for ${timeStr}. Save and finish?`,
        () => {
            stopTimer();

            const duration = elapsed;
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
                if (ex.sets) {
                    totalSets += ex.sets.filter(s => s && (s.weight > 0 || s.reps > 0)).length;
                }
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
    );
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

        const sessionName = PROGRAM[workout.session]?.name || `Session ${workout.session}`;
        html += `
            <div class="history-item" onclick="showWorkoutDetail('${workout.id}')">
                <div class="history-header">
                    <span class="history-session">${sessionName}</span>
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
    if (!workout) {
        console.error('Workout not found:', workoutId);
        return;
    }

    state.selectedWorkoutId = workoutId;

    const session = PROGRAM[workout.session];
    const sessionName = session?.name || `Session ${workout.session}`;
    document.getElementById('detail-session-title').textContent = sessionName;
    document.getElementById('detail-date').textContent = formatDate(new Date(workout.date));

    const container = document.getElementById('workout-detail-content');

    let html = `
        <div class="detail-stats">
            <div class="detail-stat">
                <div class="detail-stat-value">${formatDuration(workout.duration || 0)}</div>
                <div class="detail-stat-label">Duration</div>
            </div>
            <div class="detail-stat">
                <div class="detail-stat-value">${workout.totalSets || 0}</div>
                <div class="detail-stat-label">Sets</div>
            </div>
        </div>
    `;

    // If we have session data, show exercises
    if (session && workout.exercises) {
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
            if (data && data.sets && data.sets.some(s => s.weight > 0 || s.reps > 0)) {
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
    } else {
        html += '<p style="color: var(--text-muted); text-align: center; padding: 20px;">No exercise data recorded</p>';
    }

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
