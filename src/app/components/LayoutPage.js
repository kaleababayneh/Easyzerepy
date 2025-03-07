import React from 'react'

const LayoutPage = () => {
  return (
    <div>
    <div className="row">
          <div className="col-12">
            <h1 className="mb-4">Dashboard</h1>
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header bg-primary text-white">
                <h5 className="mb-0">Create Workout</h5>
              </div>
              <div className="card-body">
                <form onSubmit={handleCreateWorkout}>
                  <div className="mb-3">
                    <label htmlFor="workoutName" className="form-label">
                      Workout Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="workoutName"
                      value={workoutName}
                      onChange={(e) => setWorkoutName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="workoutDescription" className="form-label">
                      Workout Description
                    </label>
                    <textarea
                      className="form-control"
                      id="workoutDescription"
                      rows="3"
                      value={workoutDescription}
                      onChange={(e) => setWorkoutDescription(e.target.value)}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Create Workout
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card">
              <div className="card-header bg-primary text-white">
                <h5 className="mb-0">Create Routine</h5>
              </div>
              <div className="card-body">
                <form onSubmit={handleCreateRoutine}>
                  <div className="mb-3">
                    <label htmlFor="routineName" className="form-label">
                      Routine Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="routineName"
                      value={routineName}
                      onChange={(e) => setRoutineName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="routineDescription" className="form-label">
                      Routine Description
                    </label>
                    <textarea
                      className="form-control"
                      id="routineDescription"
                      rows="3"
                      value={routineDescription}
                      onChange={(e) => setRoutineDescription(e.target.value)}
                      required
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="workoutSelect" className="form-label">
                      Select Workouts
                    </label>
                    <select
                      multiple
                      className="form-select"
                      id="workoutSelect"
                      value={selectedWorkouts}
                      onChange={(e) => setSelectedWorkouts([...e.target.selectedOptions].map((option) => option.value))}
                      style={{ height: "150px" }}
                    >
                      {workouts.map((workout) => (
                        <option key={workout.id} value={workout.id}>
                          {workout.name}
                        </option>
                      ))}
                    </select>
                    <div className="form-text">Hold Ctrl (or Cmd) to select multiple workouts</div>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Create Routine
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <h2 className="mb-4">Your Routines</h2>
            {routines.length === 0 ? (
              <div className="alert alert-info">You don't have any routines yet. Create one above!</div>
            ) : (
              <div className="row">
                {routines.map((routine) => (
                  <div className="col-md-6 col-lg-4 mb-4" key={routine.id}>
                    <div className="card h-100">
                      <div className="card-header bg-primary text-white">
                        <h5 className="mb-0">{routine.name}</h5>
                      </div>
                      <div className="card-body">
                        <p className="card-text">{routine.description}</p>
                        <h6 className="mt-3 mb-2">Workouts:</h6>
                        {routine.workouts && routine.workouts.length > 0 ? (
                          <ul className="list-group">
                            {routine.workouts.map((workout) => (
                              <li className="list-group-item" key={workout.id}>
                                <strong>{workout.name}</strong>: {workout.description}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-muted">No workouts in this routine</p>
                        )}
                      </div>
                      <div className="card-footer d-flex justify-content-end">
                        <button className="btn btn-outline-primary btn-sm me-2">Edit</button>
                        <button className="btn btn-outline-danger btn-sm">Delete</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <h2 className="mb-4">Your Workouts</h2>
            {workouts.length === 0 ? (
              <div className="alert alert-info">You don't have any workouts yet. Create one above!</div>
            ) : (
              <div className="row">
                {workouts.map((workout) => (
                  <div className="col-md-6 col-lg-4 mb-4" key={workout.id}>
                    <div className="card h-100">
                      <div className="card-header bg-secondary text-white">
                        <h5 className="mb-0">{workout.name}</h5>
                      </div>
                      <div className="card-body">
                        <p className="card-text">{workout.description}</p>
                      </div>
                      <div className="card-footer d-flex justify-content-end">
                        <button className="btn btn-outline-secondary btn-sm me-2">Edit</button>
                        <button className="btn btn-outline-danger btn-sm">Delete</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
    </div>
  )
}

export default LayoutPage