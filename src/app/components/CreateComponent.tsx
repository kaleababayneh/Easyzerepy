"use client"

import type React from "react"

import { useState } from "react"
import { PlusCircle, X, Twitter, User, FileText, Tag } from "lucide-react"

const CreateComponent = () => {
  const [agentName, setAgentName] = useState("")
  const [agentBio, setAgentBio] = useState("")
  const [agentTwitter, setAgentTwitter] = useState("")
  const [trait, setTrait] = useState("")
  const [traits, setTraits] = useState<string[]>([])
  const [showTraitSuggestions, setShowTraitSuggestions] = useState(false)

  // Sample trait suggestions
  const traitSuggestions = [
    "Analytical",
    "Creative",
    "Detail-oriented",
    "Empathetic",
    "Strategic",
    "Technical",
    "Persuasive",
    "Resourceful",
  ]

  const handleAddTrait = () => {
    if (trait.trim() !== "" && !traits.includes(trait.trim())) {
      setTraits([...traits, trait.trim()])
      setTrait("")
    }
  }

  const handleRemoveTrait = (traitToRemove: string) => {
    setTraits(traits.filter((t) => t !== traitToRemove))
  }

  const handleSelectSuggestion = (suggestion: string) => {
    if (!traits.includes(suggestion)) {
      setTraits([...traits, suggestion])
    }
    setShowTraitSuggestions(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log({ agentName, agentBio, agentTwitter, traits })
    // Reset form or navigate to next page
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 py-6 px-8">
            <h2 className="text-2xl font-bold text-white">Create New Agent</h2>
            <p className="text-purple-200 mt-1">Fill in the details to create your custom agent</p>
          </div>

          <form onSubmit={handleSubmit} className="py-8 px-8 space-y-8">
            {/* Agent Name */}
            <div className="space-y-2">
              <label className="flex items-center text-lg font-medium text-gray-200">
                <User className="mr-2 h-5 w-5 text-purple-400" />
                Agent Name
              </label>
              <input
                type="text"
                value={agentName}
                onChange={(e) => setAgentName(e.target.value)}
                className="w-full px-4 py-3 rounded-md bg-gray-700 border border-gray-600 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                placeholder="Enter agent name"
                required
              />
            </div>

            {/* Agent Bio */}
            <div className="space-y-2">
              <label className="flex items-center text-lg font-medium text-gray-200">
                <FileText className="mr-2 h-5 w-5 text-purple-400" />
                Agent Bio
              </label>
              <textarea
                value={agentBio}
                onChange={(e) => setAgentBio(e.target.value)}
                className="w-full px-4 py-3 rounded-md bg-gray-700 border border-gray-600 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none"
                placeholder="Write three sentences about the agent"
                rows={4}
                required
              />
              <p className="text-sm text-gray-400">{agentBio.length}/500 characters</p>
            </div>

            {/* Agent Traits */}
            <div className="space-y-2">
              <label className="flex items-center text-lg font-medium text-gray-200">
                <Tag className="mr-2 h-5 w-5 text-purple-400" />
                Agent Traits
              </label>
              <div className="relative">
                <div className="flex">
                  <input
                    type="text"
                    value={trait}
                    onChange={(e) => setTrait(e.target.value)}
                    onFocus={() => setShowTraitSuggestions(true)}
                    className="flex-grow px-4 py-3 rounded-l-md bg-gray-700 border border-gray-600 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="Add a trait"
                  />
                  <button
                    type="button"
                    onClick={handleAddTrait}
                    className="px-4 py-3 rounded-r-md bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors"
                  >
                    <PlusCircle className="h-5 w-5" />
                  </button>
                </div>

                {/* Trait suggestions */}
                {showTraitSuggestions && (
                  <div className="absolute z-10 mt-1 w-full bg-gray-700 rounded-md shadow-lg max-h-60 overflow-auto">
                    <div className="py-1">
                      <div className="px-4 py-2 text-sm text-gray-400 border-b border-gray-600">Suggested Traits</div>
                      {traitSuggestions.map((suggestion) => (
                        <div
                          key={suggestion}
                          onClick={() => handleSelectSuggestion(suggestion)}
                          className={`px-4 py-2 text-gray-200 hover:bg-gray-600 cursor-pointer ${
                            traits.includes(suggestion) ? "opacity-50" : ""
                          }`}
                        >
                          {suggestion}
                          {traits.includes(suggestion) && " (added)"}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Display selected traits */}
              <div className="flex flex-wrap gap-2 mt-3">
                {traits.map((t) => (
                  <div key={t} className="flex items-center bg-gray-700 text-gray-200 px-3 py-1 rounded-full">
                    {t}
                    <button
                      type="button"
                      onClick={() => handleRemoveTrait(t)}
                      className="ml-2 text-gray-400 hover:text-gray-200"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Agent Twitter */}
            <div className="space-y-2">
              <label className="flex items-center text-lg font-medium text-gray-200">
                <Twitter className="mr-2 h-5 w-5 text-purple-400" />
                Agent Twitter
              </label>
              <div className="flex">
                <div className="flex items-center px-4 bg-gray-700 border-y border-l border-gray-600 rounded-l-md text-gray-400">
                  @
                </div>
                <input
                  type="text"
                  value={agentTwitter}
                  onChange={(e) => setAgentTwitter(e.target.value)}
                  className="flex-grow px-4 py-3 rounded-r-md bg-gray-700 border border-gray-600 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  placeholder="twitter_handle"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-colors"
              >
                Create Agent
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateComponent

